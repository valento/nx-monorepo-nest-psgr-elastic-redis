import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { prismaModelGenerator } from './generator';
import { PrismaModelGeneratorSchema } from './schema';

describe('prisma-model generator', () => {
  let tree: Tree;
  const options: PrismaModelGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await prismaModelGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
