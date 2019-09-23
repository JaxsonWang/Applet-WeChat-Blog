import hljs from './highlight.js';
import php from './languages/php.js';
import shell from './languages/shell.js';
import java from './languages/java.js';
import javascript from './languages/javascript.js';
import go from './languages/go.js';
import xml from './languages/xml.js';
import css from './languages/css.js';
import bash from './languages/bash.js';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('java', java);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('php', php);
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('go', go);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);

export default hljs;
