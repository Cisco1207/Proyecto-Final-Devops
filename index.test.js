const fs = require('fs');

test('Verificar que el archivo index.html contiene "Hola Mundo"', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  expect(html).toContain('Hola Mundo');
});