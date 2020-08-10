interface BaseTechniqueDto {
  name: string;
  steps: { text: string; order: number }[];
  guard: { id: number };
  position: { id: number };
  submission: { id: number };
  teacher: { id: number };
}

export interface CreateTechniqueDto extends BaseTechniqueDto {
  steps: { text: string; order: number }[];
}

export interface UpdateTechniqueDto extends BaseTechniqueDto {
  steps: { id: number; text: string; order: number; destroy: boolean }[];
}
