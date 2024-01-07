export interface Cat extends Remedios, Vacinas, Exames {
  id: number;
  name: string;
  dataNascimento: string;
  especie: string;
  raca: string;
  sexo: string;
  pai: string;
  mae: string;
  endereco: string;
  cidade: string;
  telefone: string;
  image: string;
  remedios?: Remedios[];
  vacinas?: Vacinas[];
  exames?: Exames[];
}

export interface Remedios {
  id: number;
  name: string;
  descricao?: string;
  horario?: string;
  data?: string;
  dataIni?: string;
  dataFim?: string;
}

export interface Vacinas {
  id: number;
  name: string;
  data?: string;
}

export interface Exames {
  id: number;
  name: string;
  data?: string;
  documentos?: string;
}
