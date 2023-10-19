const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class TreinoService {


  async getAll() {

      const treinosComIntervalos = await prisma.treino.findMany({
        include: {
          intervals: true
        }
      });
    
      // Formatar os dados conforme dos treinos
      const treinosFormatados = treinosComIntervalos.map((treino: any) => ({
        id: treino.id,
        label: treino.label,
        intervals: treino.intervals.map((intervalo: any) => ({
          label: intervalo.label,
          seconds: intervalo.seconds,
          intensity: intervalo.intensity
        }))
      }));
    
      return treinosFormatados;
    
  }

  async get(id: any) {
    const treino = await prisma.treino.findUnique({
      where: {
        id: id
      },
      include: {
        intervals: true
      }
    });
  
    if (!treino) {
      throw new Error(`Treino com ID ${id} não encontrado.`);
  
    }
  
    const treinoFormatado = {
      id: treino.id,
      label: treino.label,
      intervals: treino.intervals.map((intervalo: any) => ({
        label: intervalo.label,
        seconds: intervalo.seconds,
        intensity: intervalo.intensity
      }))
    };
  
    return treinoFormatado;
  }

}

const treinoService = new TreinoService();

export default treinoService;