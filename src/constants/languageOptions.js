export const languageOptions = [
  {
    id: 63,
    name: "JavaScript (Node.js 12.14.0)",
    label: "JavaScript (Node.js 12.14.0)",
    value: "javascript",
    boilerplate : 'console.log("Hello, World! from Javascript(NodeJS)");',
    'extension' : '.js'
  },
  {
    id: 45,
    name: "Assembly (NASM 2.14.02)",
    label: "Assembly (NASM 2.14.02)",
    value: "assembly",
    boilerplate : 'section .text\n\tglobal _start\n\n_start:\n\tmov edx,len\n\tmov ecx,msg\n\tmov ebx,1\n\tmov eax,4\n\tsyscall\n\tmov eax,1\n\tsyscall\n\nsection .data\n\tmsg db "Hello, World!",0xa\n\tlen equ $ - msg',
    'extension' : '.asm'
  },
  {
    id: 46,
    name: "Bash (5.0.0)",
    label: "Bash (5.0.0)",
    value: "bash",
    boilerplate : 'echo "Hello, World! from Bash"',
    'extension' : '.sh'
  },
  {
    id: 47,
    name: "Basic (FBC 1.07.1)",
    label: "Basic (FBC 1.07.1)",
    value: "basic",
    'boilerplate' : 'PRINT "Hello, World! from Basic"',
    'extension' : '.bas'
  },
  {
    id: 75,
    name: "C (Clang 7.0.1)",
    label: "C (Clang 7.0.1)",
    value: "c",
    'boilerplate' : '#include<stdio.h>\n\nint main()\n{\n\n\tprintf("Hello, World! from C");\n\treturn 0;\n}',
        'extension' : '.c'
  },
  {
    id: 76,
    name: "C++ (Clang 7.0.1)",
    label: "C++ (Clang 7.0.1)",
    value: "cpp",
    'boilerplate' : '#include<iostream>\n\nusing namespace std;\n\nint main()\n{\n\n\tcout<<"Hello, World! from C++";\n\treturn 0;\n}',
        'extension' : '.cpp'
  },
  {
    id: 48,
    name: "C (GCC 7.4.0)",
    label: "C (GCC 7.4.0)",
    value: "c",
    'boilerplate' : '#include<stdio.h>\n\nint main()\n{\n\n\tprintf("Hello, World! from C");\n\treturn 0;\n}',
    'extension' : '.c'
  },
  {
    id: 52,
    name: "C++ (GCC 7.4.0)",
    label: "C++ (GCC 7.4.0)",
    value: "cpp",
    'boilerplate' : '#include<iostream>\n\nusing namespace std;\n\nint main()\n{\n\n\tcout<<"Hello, World! from C++";\n\treturn 0;\n}',
    'extension' : '.cpp'
  },
  {
    id: 49,
    name: "C (GCC 8.3.0)",
    label: "C (GCC 8.3.0)",
    value: "c",
    'boilerplate' : '#include<stdio.h>\n\nint main()\n{\n\n\tprintf("Hello, World! from C");\n\treturn 0;\n}',
    'extension' : '.c'
  },
  {
    id: 53,
    name: "C++ (GCC 8.3.0)",
    label: "C++ (GCC 8.3.0)",
    value: "cpp",
    'boilerplate' : '#include<iostream>\n\nusing namespace std;\n\nint main()\n{\n\n\tcout<<"Hello, World! from C++";\n\treturn 0;\n}',
    'extension' : '.cpp'
  },
  {
    id: 50,
    name: "C (GCC 9.2.0)",
    label: "C (GCC 9.2.0)",
    value: "c",
    'boilerplate' : '#include<stdio.h>\n\nint main()\n{\n\n\tprintf("Hello, World! from C");\n\treturn 0;\n}',
    'extension' : '.c'
  },
  {
    id: 54,
    name: "C++ (GCC 9.2.0)",
    label: "C++ (GCC 9.2.0)",
    value: "cpp",
    'boilerplate' : '#include<iostream>\n\nusing namespace std;\n\nint main()\n{\n\n\tcout<<"Hello, World! from C++";\n\treturn 0;\n}',
    'extension' : '.cpp'
  },
  {
    id: 86,
    name: "Clojure (1.10.1)",
    label: "Clojure (1.10.1)",
    value: "clojure",
    'boilerplate' : '(println "Hello, World! from Clojure")',
    'extension' : '.clj'
  },
  {
    id: 51,
    name: "C# (Mono 6.6.0.161)",
    label: "C# (Mono 6.6.0.161)",
    value: "csharp",
    'boilerplate' : 'using System;\n\npublic class HelloWorld\n{\n\tstatic public void Main ()\n\t{\n\t\tConsole.WriteLine ("Hello World from C#");\n\t}\n}',
    'extension' : '.cs'
  },
  {
    id: 77,
    name: "COBOL (GnuCOBOL 2.2)",
    label: "COBOL (GnuCOBOL 2.2)",
    value: "cobol",
    'boilerplate' : 'IDENTIFICATION DIVISION.\nPROGRAM-ID. HELLO-WORLD.\nPROCEDURE DIVISION.\nDISPLAY "Hello, World! from COBOL".\nSTOP RUN.',
    'extension' : '.cob'
  
  },
  {
    id: 55,
    name: "Common Lisp (SBCL 2.0.0)",
    label: "Common Lisp (SBCL 2.0.0)",
    value: "lisp",
    'boilerplate' : '(format t "Hello, World! from Common Lisp")',
    'extension' : '.lisp'
  },
  {
    id: 56,
    name: "D (DMD 2.089.1)",
    label: "D (DMD 2.089.1)",
    value: "d",
    'boilerplate' : 'import std.stdio;\n\nvoid main()\n{\n\twriteln("Hello, World! from D");\n}',
    'extension' : '.d'
  },
  {
    id: 57,
    name: "Elixir (1.9.4)",
    label: "Elixir (1.9.4)",
    value: "elixir",
    'boilerplate' : 'IO.puts "Hello, World! from Elixir"',
    'extension' : '.ex'
  },
  {
    id: 58,
    name: "Erlang (OTP 22.2)",
    label: "Erlang (OTP 22.2)",
    value: "erlang",
    'boilerplate' : 'main(_) ->\n\tio:fwrite("Hello, World! from Erlang\n").',
    'extension' : '.erl'
  },
  {
    id: 44,
    label: "Executable",
    name: "Executable",
    value: "exe",
    'boilerplate' : 'Hello, World! from Executable',
    'extension' : '.exe'
  },
  {
    id: 87,
    name: "F# (.NET Core SDK 3.1.202)",
    label: "F# (.NET Core SDK 3.1.202)",
    value: "fsharp",
    'boilerplate' : 'printfn "Hello, World! from F#"',
    'extension' : '.fs'
  },
  {
    id: 59,
    name: "Fortran (GFortran 9.2.0)",
    label: "Fortran (GFortran 9.2.0)",
    value: "fortran",
    'boilerplate' : 'program hello\n\tprint *, "Hello, World! from Fortran"\nend program hello',
    'extension' : '.f'
  },
  {
    id: 60,
    name: "Go (1.13.5)",
    label: "Go (1.13.5)",
    value: "go",
    'boilerplate' : 'package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello, World! from Go")\n}',
    'extension' : '.go'
  },
  {
    id: 88,
    name: "Groovy (3.0.3)",
    label: "Groovy (3.0.3)",
    value: "groovy",
    'boilerplate' : 'println "Hello, World! from Groovy"',
    'extension' : '.groovy'
  },
  {
    id: 61,
    name: "Haskell (GHC 8.8.1)",
    label: "Haskell (GHC 8.8.1)",
    value: "haskell",
    'boilerplate' : 'main = putStrLn "Hello, World! from Haskell"',
    'extension' : '.hs'
  },
  {
    id: 62,
    name: "Java (OpenJDK 13.0.1)",
    label: "Java (OpenJDK 13.0.1)",
    value: "java",
    'boilerplate' : 'class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello, World! from Java");\n\t}\n}',
    'extension' : '.java'
  },

  {
    id: 78,
    name: "Kotlin (1.3.70)",
    label: "Kotlin (1.3.70)",
    value: "kotlin",
    'boilerplate' : 'fun main() {\n\tprintln("Hello, World! from Kotlin")\n}',
    'extension' : '.kt'
  },
  {
    id: 64,
    name: "Lua (5.3.5)",
    label: "Lua (5.3.5)",
    value: "lua",
    'boilerplate' : 'print("Hello, World! from Lua")',
    'extension' : '.lua'
  },

  {
    id: 79,
    name: "Objective-C (Clang 7.0.1)",
    label: "Objective-C (Clang 7.0.1)",
    value: "objectivec",
    'boilerplate' : '#import <Foundation/Foundation.h>\n\nint main(void) {\n\tNSLog(@"Hello, World! from Objective-C");\n\treturn 0;\n}',
    'extension' : '.m'
  },
  {
    id: 65,
    name: "OCaml (4.09.0)",
    label: "OCaml (4.09.0)",
    value: "ocaml",
    'boilerplate' : 'print_endline "Hello, World! from OCaml"',
    'extension' : '.ml'
  },
  {
    id: 66,
    name: "Octave (5.1.0)",
    label: "Octave (5.1.0)",
    value: "octave",
    'boilerplate' : 'printf("Hello, World! from Octave")',
    'extension' : '.m'
  },
  {
    id: 67,
    name: "Pascal (FPC 3.0.4)",
    label: "Pascal (FPC 3.0.4)",
    value: "pascal",
    'boilerplate' : 'program Hello;\nbegin\n\twriteln ("Hello, World! from Pascal");\nend.',
    'extension' : '.pas'
  },
  {
    id: 85,
    name: "Perl (5.28.1)",
    label: "Perl (5.28.1)",
    value: "perl",
    'boilerplate' : 'print "Hello, World! from Perl"',
    'extension' : '.pl'
  },
  {
    id: 68,
    name: "PHP (7.4.1)",
    label: "PHP (7.4.1)",
    value: "php",
    'boilerplate' : '<?php\n\tprint("Hello, World! from PHP");\n?>',
    'extension' : '.php'
  },
  {
    id: 43,
    label: "Plain Text",
    name: "Plain Text",
    value: "text",
    'boilerplate' : 'Hello, World! from Plain Text',
    'extension' : '.txt'
  },
  {
    id: 69,
    name: "Prolog (GNU Prolog 1.4.5)",
    label: "Prolog (GNU Prolog 1.4.5)",
    value: "prolog",
    'boilerplate' : ':- initialization(main).\n\nmain :- write(\'Hello, World! from Prolog\'), nl, halt.',
    'extension' : '.pl'
  },
  {
    id: 70,
    name: "Python (2.7.17)",
    label: "Python (2.7.17)",
    value: "python",
    'boilerplate' : 'print "Hello, World! from Python"',
    'extension' : '.py',
  },
  {
    id: 71,
    name: "Python (3.8.1)",
    label: "Python (3.8.1)",
    value: "python",
    'boilerplate' : 'print("Hello, World! from Python")',
    'extension' : '.py'
  },
  {
    id: 80,
    name: "R (4.0.0)",
    label: "R (4.0.0)",
    value: "r",
    'boilerplate' : 'cat("Hello, World! from R")',
    'extension' : '.r'
  },
  {
    id: 72,
    name: "Ruby (2.7.0)",
    label: "Ruby (2.7.0)",
    value: "ruby",
    'boilerplate' : 'puts "Hello, World! from Ruby"',
    'extension' : '.rb'
  },
  {
    id: 73,
    name: "Rust (1.40.0)",
    label: "Rust (1.40.0)",
    value: "rust",
    'boilerplate' : 'fn main() {\n\tprintln!("Hello, World! from Rust");\n}',
    'extension' : '.rs'
  },
  {
    id: 81,
    name: "Scala (2.13.2)",
    label: "Scala (2.13.2)",
    value: "scala",
    'boilerplate' : 'object Main extends App {\n\tprintln("Hello, World! from Scala")\n}',
    'extension' : '.scala'
  },
  {
    id: 82,
    name: "SQL (SQLite 3.27.2)",
    label: "SQL (SQLite 3.27.2)",
    value: "sql",
    'boilerplate' : 'SELECT "Hello, World! from SQL" AS greeting',
    'extension' : '.sql'
  },
  {
    id: 83,
    name: "Swift (5.2.3)",
    label: "Swift (5.2.3)",
    value: "swift",
    'boilerplate' : 'print("Hello, World! from Swift")',
    'extension' : '.swift'
  },
  {
    id: 74,
    name: "TypeScript (3.7.4)",
    label: "TypeScript (3.7.4)",
    value: "typescript",
    'boilerplate' : 'console.log("Hello, World! from TypeScript");',
    'extension' : '.ts'
  },
  {
    id: 84,
    name: "Visual Basic.Net (vbnc 0.0.0.5943)",
    label: "Visual Basic.Net (vbnc 0.0.0.5943)",
    value: "vbnet",
    'boilerplate' : 'Imports System\n\nModule Program\n\tSub Main()\n\t\tConsole.WriteLine("Hello, World! from Visual Basic.Net")\n\tEnd Sub\nEnd Module',
    'extension' : '.vb'
  },
];
