const { z } = require('zod');

const registerSchema = z.object({
  email: z.string().email('Email inválido'),
  username: z.string().min(3, 'Username deve ter pelo menos 3 caracteres'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
  role: z.enum(['cliente', 'barbeiro']),

  // 🔥 campos da barbearia (opcional)
  nomeBarbearia: z.string().optional(),
  cep: z.string().optional(),
  rua: z.string().optional(),
  numero: z.string().optional(),
  cnpj: z.string().optional()
});

const loginSchema = z.object({
  email: z.string().email().optional(),
  username: z.string().optional(),
  password: z.string().min(6)
});

module.exports = { registerSchema, loginSchema };