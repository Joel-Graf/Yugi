import { Request, Response, NextFunction } from "express";

const errorMiddleware = (
  err: Error, // Erro gerado durante a execução
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("VAPO");
  console.error(err); // Log do erro (pode ser aprimorado com mais detalhes)

  // Defina um código de status padrão
  const statusCode = 500; // Se o erro não tiver um status, assume 500
  const message = err.message || "Internal Server Error"; // Mensagem do erro

  // Retorna a resposta formatada
  res.status(statusCode).json({
    success: false,
    message: message,
    ...(process.env.NODE_ENV === "development" && {
      // Em desenvolvimento, inclui mais detalhes
      stack: err.stack,
    }),
  });
};

export default errorMiddleware;
