module.exports = {
  name: 'todos',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/todos',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
