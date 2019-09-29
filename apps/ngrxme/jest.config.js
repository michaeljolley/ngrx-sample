module.exports = {
  name: 'ngrxme',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngrxme',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
