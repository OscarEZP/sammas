import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { TeamService } from '../../services/team.repository';
import { Response } from 'express';
import { extname } from 'path';
import { UploadFileService } from 'src/services/upload-files';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export interface TeamRequest {
  name: string;
  homeName: string;
  awayName: string;
  start: Date;
  type: string;
  sport: string;
  state: string;
  liveBetOffers: boolean;
  openForLiveBetting: boolean;
}

const CLOUD_BUCKET = process.env.CLOUD_BUCKET;

@Controller('teams')
export class TeamController {
  constructor(
    private readonly teamService: TeamService,
    private readonly uploadFilesService: UploadFileService,
  ) {}

  @Post()
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: diskStorage({
        filename: (
          req: any,
          file: { originalname: string },
          cb: (arg0: any, arg1: string) => void,
        ) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async create(
    @Body() body: TeamRequest,
    @UploadedFiles() files,
    @Res() res: Response,
  ) {
    try {
      let response = null;
      let uploadStorage = null;
      if (files && files.length > 0) {
        response = await Promise.all(
          files.map(async (file: any) => {
            const data = {
              filename: file.filename,
              path: file.path,
              type: file.fieldname,
            };
            console.log(CLOUD_BUCKET);
            uploadStorage = await this.uploadFilesService.uploadDocument(
              data,
              CLOUD_BUCKET,
            );
          }),
        );
      }

      const data = { ...body, fileUrl: uploadStorage.fileUrl };
      response = await this.teamService.create(data);
      return res.status(200).send({ message: response });
    } catch (error) {
      console.log(error);
      return res.status(error.status).send({ message: error.message });
    }
  }

  @Get()
  async get(@Res() res: Response) {
    try {
      const response = await this.teamService.getAll();
      console.log(response);
      return res.status(200).send(response);
    } catch (error) {
      console.log(error, 'ERROR');
      return res.status(error.status).send({ message: error.message });
    }
  }

  @Get(':id')
  async getById(@Param('id') id: string, @Res() res: Response) {
    try {
      const response = await this.teamService.getById(id);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(error.status).send({ message: error.message });
    }
  }
}
