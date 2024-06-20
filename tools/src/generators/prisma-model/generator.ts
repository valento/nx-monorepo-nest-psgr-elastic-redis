import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { PrismaModelGeneratorSchema } from './schema';

export default async function (
  tree: Tree,
  options: PrismaModelGeneratorSchema
) {
  
  const projectRoot = `libs/prisma-schema-${options.name}`;

  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });
  
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

// export default prismaModelGenerator;
