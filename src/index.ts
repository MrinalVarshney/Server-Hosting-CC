import express, { Request, Response, NextFunction } from 'express';

const PORT = process.env.PORT;

const app = express();

//MiddleWare
app.use(express.json())

//Routes
app.get("/",(req:Request,res:Response)=>{
	res.status(200).json({message:`HII from server ${PORT}`});
})

// Error Handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
     console.error(err.stack);
         res.status(500).json({ error: 'Internal Server Error' });
});

//Start server
app.listen(PORT,()=>{
      console.log(`Server running on http://localhost:${PORT}`)
})




