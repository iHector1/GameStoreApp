import { Request,Response} from 'express';

class IndexControllers{
    public index (req:Request, res:Response){
        res.json({ text:'Api is /api/games' });
    }
}
export const indexController = new IndexControllers();