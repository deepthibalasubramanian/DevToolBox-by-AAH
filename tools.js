// tools.js
// Export an array of categories, each with a name and tools array
// To add a new tool, just add to the relevant category below

const TOOL_CATEGORIES = [
  {
    name: "Version Control",
    tools: [
      {
        name: "Git",
        description: "Distributed version control system for tracking changes in source code.",
        install: "https://git-scm.com/downloads",
        syntax: "git clone <repo-url>\ngit status\ngit commit -m 'message'",
        docs: "https://git-scm.com/doc",
        tutorialLinks: [
          { label: "Microsoft Learn: Introduction to Git", url: "https://learn.microsoft.com/en-us/training/modules/intro-to-git/" },
          { label: "roadmap.sh: Git", url: "https://roadmap.sh/git" }
        ]
      },
      {
        name: "SVN",
        description: "Centralized version control system.",
        install: "https://subversion.apache.org/packages.html",
        syntax: "svn checkout <repo-url>\nsvn commit -m 'message'",
        docs: "https://subversion.apache.org/docs/"
      },
      {
        name: "Mercurial",
        description: "Distributed version control system.",
        install: "https://www.mercurial-scm.org/downloads",
        syntax: "hg clone <repo-url>\nhg commit -m 'message'",
        docs: "https://www.mercurial-scm.org/guide"
      },
      {
        name: "Perforce",
        description: "Centralized version control for large scale projects.",
        install: "https://www.perforce.com/downloads/helix-core-server",
        syntax: "p4 sync\np4 submit -d 'desc'",
        docs: "https://www.perforce.com/manuals"
      },
      {
        name: "Bazaar",
        description: "Friendly distributed version control system.",
        install: "http://wiki.bazaar.canonical.com/Download",
        syntax: "bzr branch <repo-url>\nbzr commit -m 'message'",
        docs: "http://doc.bazaar.canonical.com/en/"
      }
    ]
  },
  {
    name: "Code Formatting",
    tools: [
      {
        name: "Prettier",
        description: "Opinionated code formatter for many languages.",
        install: "npm install --save-dev prettier",
        syntax: "prettier --write .",
        docs: "https://prettier.io/docs/en/index.html",
        tutorialLinks: [
          { label: "Prettier Official Guide", url: "https://prettier.io/docs/en/index.html" },
          { label: "Microsoft Learn: Format code with Prettier", url: "https://learn.microsoft.com/en-us/training/modules/format-code-prettier/" }
        ]
      },
      {
        name: "ESLint",
        description: "Find and fix problems in your JavaScript code.",
        install: "npm install --save-dev eslint",
        syntax: "eslint . --fix",
        docs: "https://eslint.org/docs/latest/"
      },
      {
        name: "Black",
        description: "The uncompromising Python code formatter.",
        install: "pip install black",
        syntax: "black .",
        docs: "https://black.readthedocs.io/en/stable/"
      },
      {
        name: "clang-format",
        description: "C/C++/Java/JavaScript/Objective-C code formatter.",
        install: "brew install clang-format",
        syntax: "clang-format -i *.cpp",
        docs: "https://clang.llvm.org/docs/ClangFormat.html"
      },
      {
        name: "Stylelint",
        description: "Modern linter for CSS/SCSS.",
        install: "npm install --save-dev stylelint",
        syntax: "stylelint '**/*.css' --fix",
        docs: "https://stylelint.io/user-guide/"
      }
    ]
  },
  {
    name: "AI Assistants",
    tools: [
      {
        name: "GitHub Copilot",
        description: "AI pair programmer that helps you write code.",
        install: "Install via VS Code Extensions: GitHub Copilot",
        syntax: "// Start typing and Copilot will suggest code",
        docs: "https://docs.github.com/en/copilot",
        tutorialLinks: [
          { label: "Microsoft Learn: Get started with GitHub Copilot", url: "https://learn.microsoft.com/en-us/training/modules/get-started-with-github-copilot/" },
          { label: "GitHub Copilot Docs", url: "https://docs.github.com/en/copilot" }
        ]
      },
      {
        name: "Tabnine",
        description: "AI code completion assistant.",
        install: "Install via VS Code Extensions: Tabnine",
        syntax: "// Tabnine suggests code as you type",
        docs: "https://www.tabnine.com/docs/"
      },
      {
        name: "Amazon CodeWhisperer",
        description: "AI-powered code suggestions for AWS developers.",
        install: "Install via AWS Toolkit for VS Code",
        syntax: "// CodeWhisperer suggests code as you type",
        docs: "https://docs.aws.amazon.com/codewhisperer/latest/userguide/"
      },
      {
        name: "Kite",
        description: "AI-powered coding assistant for Python.",
        install: "Download from https://www.kite.com/download/",
        syntax: "// Kite suggests code as you type",
        docs: "https://help.kite.com/category/42-getting-started"
      },
      {
        name: "OpenAI GPT-3 Playground",
        description: "Experiment with OpenAI's GPT-3 for code and text generation.",
        install: "https://platform.openai.com/playground",
        syntax: "// Use the web interface to try prompts",
        docs: "https://platform.openai.com/docs/guides/completion"
      }
    ]
  },
  {
    name: "Package Managers",
    tools: [
      {
        name: "npm",
        description: "Node.js package manager.",
        install: "Comes with Node.js or install via https://www.npmjs.com/get-npm",
        syntax: "npm install <package>\nnpm run <script>",
        docs: "https://docs.npmjs.com/",
        tutorialLinks: [
          { label: "Microsoft Learn: Use npm", url: "https://learn.microsoft.com/en-us/training/modules/use-npm/" },
          { label: "roadmap.sh: npm", url: "https://roadmap.sh/npm" }
        ]
      },
      {
        name: "pip",
        description: "Python package installer.",
        install: "Comes with Python or install via https://pip.pypa.io/en/stable/installation/",
        syntax: "pip install <package>",
        docs: "https://pip.pypa.io/en/stable/"
      },
      {
        name: "yarn",
        description: "Fast, reliable, and secure dependency management.",
        install: "npm install --global yarn",
        syntax: "yarn add <package>\nyarn run <script>",
        docs: "https://classic.yarnpkg.com/en/docs/"
      },
      {
        name: "Homebrew",
        description: "The missing package manager for macOS.",
        install: "/bin/bash -c '$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)'",
        syntax: "brew install <package>",
        docs: "https://docs.brew.sh/"
      },
      {
        name: "Composer",
        description: "Dependency manager for PHP.",
        install: "https://getcomposer.org/download/",
        syntax: "composer require <package>",
        docs: "https://getcomposer.org/doc/"
      }
    ]
  },
  {
    name: "APIs & Testing",
    tools: [
      {
        name: "Postman",
        description: "API platform for building and using APIs.",
        install: "https://www.postman.com/downloads/",
        syntax: "// Use the GUI to send requests",
        docs: "https://learning.postman.com/docs/"
      },
      {
        name: "cURL",
        description: "Command-line tool for transferring data with URLs.",
        install: "brew install curl",
        syntax: "curl -X GET https://api.example.com",
        docs: "https://curl.se/docs/"
      },
      {
        name: "Insomnia",
        description: "API design platform and REST client.",
        install: "https://insomnia.rest/download",
        syntax: "// Use the GUI to send requests",
        docs: "https://docs.insomnia.rest/"
      },
      {
        name: "Jest",
        description: "Delightful JavaScript testing framework.",
        install: "npm install --save-dev jest",
        syntax: "jest",
        docs: "https://jestjs.io/docs/getting-started"
      },
      {
        name: "Mocha",
        description: "Feature-rich JavaScript test framework.",
        install: "npm install --save-dev mocha",
        syntax: "mocha",
        docs: "https://mochajs.org/#getting-started"
      }
    ]
  },
  {
    name: "Build Tools",
    tools: [
      {
        name: "Webpack",
        description: "Module bundler for JavaScript applications.",
        install: "npm install --save-dev webpack webpack-cli",
        syntax: "webpack --config webpack.config.js",
        docs: "https://webpack.js.org/concepts/"
      },
      {
        name: "Gulp",
        description: "Toolkit for automating painful or time-consuming tasks.",
        install: "npm install --save-dev gulp",
        syntax: "gulp <task>",
        docs: "https://gulpjs.com/docs/en/getting-started/quick-start"
      },
      {
        name: "Grunt",
        description: "JavaScript task runner.",
        install: "npm install --save-dev grunt",
        syntax: "grunt <task>",
        docs: "https://gruntjs.com/getting-started"
      },
      {
        name: "Parcel",
        description: "Zero configuration web application bundler.",
        install: "npm install --save-dev parcel",
        syntax: "parcel build index.html",
        docs: "https://parceljs.org/getting-started/webapp/"
      },
      {
        name: "Rollup",
        description: "Module bundler for JavaScript.",
        install: "npm install --save-dev rollup",
        syntax: "rollup -c",
        docs: "https://rollupjs.org/introduction/"
      }
    ]
  },
  {
    name: "Documentation",
    tools: [
      {
        name: "JSDoc",
        description: "API documentation generator for JavaScript.",
        install: "npm install --save-dev jsdoc",
        syntax: "jsdoc <files>",
        docs: "https://jsdoc.app/about-getting-started.html"
      },
      {
        name: "Sphinx",
        description: "Python documentation generator.",
        install: "pip install sphinx",
        syntax: "sphinx-quickstart",
        docs: "https://www.sphinx-doc.org/en/master/usage/quickstart.html"
      },
      {
        name: "MkDocs",
        description: "Static site generator for project documentation.",
        install: "pip install mkdocs",
        syntax: "mkdocs serve",
        docs: "https://www.mkdocs.org/user-guide/"
      },
      {
        name: "Doxygen",
        description: "Documentation generator for C++, C, Java, and more.",
        install: "brew install doxygen",
        syntax: "doxygen -g",
        docs: "https://www.doxygen.nl/manual/"
      },
      {
        name: "Swagger UI",
        description: "Visualize and interact with your API’s resources.",
        install: "https://swagger.io/tools/swagger-ui/",
        syntax: "// Use the web interface",
        docs: "https://swagger.io/docs/"
      }
    ]
  },
  {
    name: "Testing",
    tools: [
      {
        name: "Jest",
        description: "Delightful JavaScript testing framework.",
        install: "npm install --save-dev jest",
        syntax: "jest",
        docs: "https://jestjs.io/docs/getting-started"
      },
      {
        name: "Mocha",
        description: "Feature-rich JavaScript test framework.",
        install: "npm install --save-dev mocha",
        syntax: "mocha",
        docs: "https://mochajs.org/#getting-started"
      },
      {
        name: "Cypress",
        description: "End-to-end testing framework for web applications.",
        install: "npm install cypress --save-dev",
        syntax: "npx cypress open",
        docs: "https://docs.cypress.io/"
      },
      {
        name: "Selenium",
        description: "Automated testing suite for web applications.",
        install: "https://www.selenium.dev/downloads/",
        syntax: "// Varies by language and setup",
        docs: "https://www.selenium.dev/documentation/"
      },
      {
        name: "JUnit",
        description: "A simple framework to write repeatable tests in Java.",
        install: "Add as a dependency in your build tool (e.g., Maven, Gradle)",
        syntax: "// Write test methods with @Test annotation",
        docs: "https://junit.org/junit5/docs/current/user-guide/"
      }
    ]
  },
  {
    name: "Deployment/CI/CD",
    tools: [
      {
        name: "Docker",
        description: "Platform for building, sharing, and running applications in containers.",
        install: "https://www.docker.com/products/docker-desktop/",
        syntax: "docker build -t my-image .\ndocker run my-image",
        docs: "https://docs.docker.com/"
      },
      {
        name: "Jenkins",
        description: "Automation server for building, testing, and deploying software.",
        install: "https://www.jenkins.io/download/",
        syntax: "// Configure jobs via the web interface",
        docs: "https://www.jenkins.io/doc/"
      },
      {
        name: "GitLab CI/CD",
        description: "Integrated CI/CD in GitLab.",
        install: "Included with GitLab",
        syntax: "// Define pipelines in .gitlab-ci.yml",
        docs: "https://docs.gitlab.com/ee/ci/"
      },
      {
        name: "GitHub Actions",
        description: "Automate, customize, and execute your software development workflows right in your repository.",
        install: "Included with GitHub",
        syntax: "// Define workflows in .github/workflows/*.yml",
        docs: "https://docs.github.com/en/actions"
      },
      {
        name: "CircleCI",
        description: "Cloud-based CI/CD platform.",
        install: "https://circleci.com/setup/",
        syntax: "// Define workflows in .circleci/config.yml",
        docs: "https://circleci.com/docs/"
      }
    ]
  },
  {
    name: "Database Tools",
    tools: [
      {
        name: "DBeaver",
        description: "Free universal database tool.",
        install: "https://dbeaver.io/download/",
        syntax: "// Use the GUI for database interaction",
        docs: "https://github.com/dbeaver/dbeaver/wiki"
      }
    ]
  }
];
