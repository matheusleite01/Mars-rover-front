export type Movement = {
  _id: string;
  commands: string;
  createdAt: string;
  finalPosition: string;
  initialPosition: string;
  log: string[];
  plateau: {
    maxX: number;
    maxY: number;
  };
  updateAt: string;
};
