import { trelloDatabase } from "workshop-scripts";
import * as path from 'path';
import * as fs from 'fs';

const dbPath = path.resolve('./trelloapp/backend/data/database.json')

export const testSetupData = (data: trelloDatabase) => {

  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2))

  return data;

};