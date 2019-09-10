const path = require('path')
const run = require('../utils/run')
const assert = require('../utils/assert')
const sameDirContent = require('../utils/sameDirContent')
const f = require('../fixtures/constants')

const excludeFilter = [
  'ElectrodeApiImpl.xcodeproj',
  'project.pbxproj',
  'package.json',
  '.DS_Store',
  'index.android.bundle',
  'index.android.bundle.meta',
  'yarn.lock',
  'README.md',
  'WalmartItemApi.spec.js',
  'SysteTestEventApi.spec.js',
  'SystemTestsApi.spec.js',
  '.yarn-integrity'
].map(s => `**/${s}`).join(',')

run(`create-api ${f.testApiName} -p ${f.testApiPkgName} --skipNpmCheck`)
assert(sameDirContent(f.pathToBaseApiFixture, path.join(process.cwd(), f.testApiName), { excludeFilter }), 'Generated API differ from reference fixture !')
