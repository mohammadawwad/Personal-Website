export const projects = [
  {
    title: 'Perfetto GPU Compute Plugin',
    description: "Built \"GpuCompute,\" a GPU kernel performance analysis plugin for Google's Perfetto, now merged upstream into the open-source project. Designed to feel familiar to developers coming from NVIDIA Nsight Compute, it combines a cycle-accurate kernel timeline with structured per-kernel metrics (speed-of-light throughput, launch statistics, occupancy, workload analysis) in one view, with baseline support to diff relative and absolute metrics across kernel runs. Selecting a kernel on the timeline automatically opens the Compute tab, and a sortable results table makes it easy to spot the best- and worst-performing kernels across a whole workload. Built to support multiple GPU vendors/architectures through modular metric registries and terminology mappings, and later extended with automated bottleneck detection for CUDA kernels while at Rivos (acquired by Meta).",
      image: '/images/GpuCompute.png',
      tags: ['TypeScript', 'Perfetto', 'CUDA', 'GPU Performance', 'Nvidia Nsight', 'Open Source'],
    code: 'https://github.com/google/perfetto/pull/5436',
    demo: 'https://perfetto.dev/',
    id: 13,
  },

  {
    title: 'MIT 6.86x AI Course',
    description: "Completing the MIT AI course provided me with a solid foundation in machine learning principles and practical applications. Through projects like building an Automatic Review Analyzer, Digit Recognition using Neural Networks, and applying Reinforcement Learning, I gained hands-on experience in implementing models such as linear classifiers, neural networks, and clustering algorithms. The course sharpened my skills in Python, TensorFlow, and model evaluation, deepening my understanding of key concepts like gradient descent, regularization, and feature engineering, and preparing me to tackle real-world AI challenges.",
      image: '/images/MIT.png',
      tags: ['Python', 'AI'],
    code: 'https://github.com/mohammadawwad/MIT-6.86AI-Python',
    demo: 'https://www.edx.org/learn/machine-learning/massachusetts-institute-of-technology-machine-learning-with-python-from-linear-models-to-deep-learning?utm_medium=social&utm_campaign=social-sharing-db&utm_source=twitter',
    id: 0,
  },

  {
    title: 'Formula EV Racecar',
    description: "Completing my first year of engineering with the UVic Formula SAE team was a transformative experience. Despite a last-minute battery issue that forced us to withdraw from the Michigan competition, my work on the controls system team provided hands-on experience in low-level C programming, CAN networks, and data analysis to operate and safely control a high speed EV. This opportunity elevated my skills to industrial standards, deepening my understanding of practical engineering solutions in the high-stakes environment of motorsports.",
      image: '/images/FSAE.png',
      tags: ['C', 'Control Systems'],
    code: 'https://github.com/UVicFormulaMotorsport/Control-System-Tutorials',
    demo: 'https://www.youtube.com/@UVicFSAE/videos',
    id: 1,
  },
  
  {
    title: 'AI Flappy Bird',
    description: "This project aimed to create an independent AI agent capable of playing the Flappy Bird game. Leveraging reinforcement learning techniques, the AI employs a neural network to interpret real-time game states, transforming them into strategic actions. With each generation, the dataset rapidly refines, empowering the AI to consistently score high. Notably, the video showcases the evolution from a challenging initial dataset to an AI that achieves enduring success within just few generations.",
      image: '/images/FlappyBird.png',
      tags: ['Python', 'AI'],
    code: 'https://github.com/mohammadawwad/Flappy-Bird-AI',
    demo: 'https://www.youtube.com/watch?v=eYFpxTxpqcQ',
    id: 2,
  },

  {
    title: 'FRC 2023 Robot',
    description: "Project features include multidirectional swerve drive, adaptable linear extension, efficient intake, automated game piece alignment, dynamic wrist control, and precise outfeed pacing. Programming highlights involve field-oriented swerve drive, auto-balancing endgame code, PID-tuned motor control, and sensor-driven automation. Streamlined autonomous routines interpret JSON data for seamless movement and control.",
      image: '/images/Sam.png',
      tags: ['Java'],
    code: 'https://github.com/FRC-6390/FRC-Season-2023',
    demo: 'https://www.youtube.com/watch?v=VzLffgqjD-g',
    id: 3,
  },

  {
    title: 'AI Nueral Network Car',
    description: "A self driving car game that allows you to race against your very own neural network that you can develop ove time. The game uses advanced physics for movement and virtual distance sensors for providing a range of distances and feedback for the AI car being developed. The site even lets you save previous networks and delete them from your local storage. It even includes a network visualizer that can show you what the car you are up against is processing based on weights and biases.",
      image: '/images/AICar.png',
      tags: ['Javascript OOP'],
    code: 'https://github.com/mohammadawwad/AI-Self-Driving-Car',
    demo: 'https://ai-self-driving-car.netlify.app/',
    id: 4,
  },

  {
    title: 'First Journey',
    description: "Welcome to the centralized Media tech Application, where you can showcase all your projects from application and programming to robotics and electronics. First Journey allows you to create an account, make posts, edit and delete them, as well as like and comment. Some neat features include searching for specific posts by Title and or Tags. Make sure to sign up and discover some other cool features.",
      image: '/images/FirstJourney.png',
      tags: ['MongoDB', 'Express', 'React.js', 'Node.js'],
    code: 'https://github.com/mohammadawwad/First-Journey',
    demo: 'https://firstjourney.netlify.app/posts',
    id: 5,
  },
    
  {
    title: 'FRC Robot',
    description:"As lead programmer on FRC team 6390 Hephaestus, I was responsible for programming our robot named Kevin. Some key functionalities include vision tracking, autonomous routines, and robot subsystems such as shooting, climbing, intaking and much more. This was all done by programming a sequence of motors, servos, pneumatics, and cameras using Java as well as creating a remote controlled operating interface with a series of different controllers from Joysticks to Xbox controllers.",
    image: '/images/Kevin.png',
    tags: ['Java'],
    code: 'https://github.com/mohammadawwad/KevinRobotV2',
    demo: 'https://www.youtube.com/watch?v=eHRTgEbxUA0',
    id: 6,
  },
    
  {
    title: 'FRC Swerve Drive',
    description: "I'm proud to say I have programmed the first Swerve Drive robot in British Columbia, Canada. Programming it was extremely difficult but it has its advantages such as moving in any direction as well as rotating as it drives. This allows the robot to have a lot of movement and control and was programmed in a field oriented way since each wheel or module can move back and forward and spin clockwise and counter cloockwise infinitely.",
    image: '/images/SwerveDrive.png',
    tags: ['Java'],
    code: 'https://github.com/FRC-6390/Swerve2021',
    demo: 'https://www.youtube.com/watch?v=Kxt1Z--HFpQ',
    id: 7,
  },

  {
    title: 'Stylish Tile Website',
    description: "While working at Stylish Tile as a Web Developer I was responsible for creating and developing a responsive and interactive website from scratch. This includes creating image libraries, and animations.",
      image: '/images/StylishTile.png',
      tags: ['JavaScript', 'HTML', 'CSS'],
    code: 'https://github.com/mohammadawwad/Stylish-Tile-web',
    demo: 'https://www.youtube.com/watch?v=cvaDPgurVzg',
    id: 8,
  },

  {
    title: '3rd place Replit Hackathon',
    description: "Minlexa was my project submission for the Replit Summer Amazon Alexa Hackathon. It allowed you to ask alexa any question related to crafting in Minecraft and would inform you about all the necessary materials needed to craft the item, as well as give you a brief description about it, and a visual display.",
      image: '/images/Minecraft.png',
      tags: ['Python', 'Amazon Web Services'],
    code: 'https://replit.com/@awwad/Minelexa',
    demo: 'https://youtu.be/wH6XelT9Bcc',
    id: 9,
  },

  {
    title: 'Pathfinding Application',
    description: "Developed using the A* and Dijkstra algorithms to find the shortest path possible to a desired setpoint. It was developed using Java Swing with multiple GUI features. It was even expanded upon into a full scale application to develop robot coordinates which can be used to automatically create an autonomous routine which can be seen in the video demonstration.",
      image: '/images/FRCJavaPathfinding.png',
      tags: ['Java'],
    code: 'https://github.com/mohammadawwad/Java-Pathfinding',
    demo: 'https://www.youtube.com/watch?v=bpHeQwgfLRc',
    id: 10,
  },

  {
    title: 'Face And Mask Recognition',
    description: "Using Machine Learning along side Python and OpenCV I was able to develop a face recognition system that would auto detect anyone it can recognise from the pictures uploaded to the program trainer. From there I further developed it during the pandemic to recognise whether or not someone is wearing a mask which can be prove useful for enforcing specific rules and laws.",
      image: '/images/FaceRec.png',
      tags: ['Python'],
    code: 'https://github.com/mohammadawwad/Python-Vision-Processing',
    demo: 'https://youtu.be/eqJNr-Rn-S0',
    id: 11,
  },

  {
    title: 'Exhaust Hackathon',
    description: "Exhaust was my Project Tech Conference Hackathon submission. It is a carbon emission tracking application which allows you to visualize all your data with graphs and charts as well as global statistics showing you all emissions from other participating countries. With features such as google maps active tracking using the maps api for more accurate results.",
      image: '/images/Exhaust.png',
      tags: ['MongoDB', 'Express', 'React.js', 'Node.js'],
    code: 'https://github.com/mohammadawwad/Exhaust',
    demo: 'https://youtu.be/UTqhwg0qvQ8',
    id: 12,
  },
 ];

export const TimeLineData = [
  { year: 2017, text: 'Started learning how to program', },
  { year: 2018, text: 'Joined my schools robotics team', },
  { year: 2019, text: 'Became Lead Programmer on the team', },
  { year: 2020, text: 'Started working at Stylish Tile as a web developer', },
  { year: 2021, text: 'Programming workshop mentor and organiser', },
  { year: 2022, text: 'Accepted into SHAD program, and started Woring at Cloverdale Robotics as a Projected Developer',},
  { year: 2023, text: 'Anounced as the 2023 Engineering Shulich Leader at UVIC',},
  { year: 2024, text: 'Completed my first Software Development Co-op at SystemMicro',},
  { year: 2025, text: 'Joined Rivos (acquired by Meta) as an AI Software Engineer Co-op, building GPU performance tooling for Perfetto',},
  { year: 2026, text: 'Returned to Rivos(Meta), then joined Reach Technologies and System Micro for embedded and AI-assisted engineering work',},
];



export const Experiences = [

  {
    index: 0,
    title: "Embedded Software Engineer Co-op",
    company: "Reach Technologies",
    logos: ['/images/ReachTechnologies.png'],
    dateRange: "May 2026 - Aug 2026 · 4 mos · Remote, Victoria, BC",
    description: (
      <div>
        <p>
          <strong>Developed high-precision GNSS/IMU firmware and backend features</strong> for Reach's timing and positioning hardware, working across C#/.NET services, gRPC APIs, and embedded Linux systems. Shipped firmware upload/recovery workflows, NTP server redundancy, and clock configuration features, backed by extensive automated testing, and researched bootloader automation, TLS certificate management, and AI-assisted development workflows.
        </p>
      </div>
    ),

    tags: ["C#", ".NET", "gRPC", "Embedded Linux", "GNSS/IMU", "Vivado", "Firmware", "Azure DevOps", "Testing"],
  },

  {
    index: 1,
    title: "Full-Stack AI Product Engineer",
    company: "System Micro",
    logos: ['/images/SystemMicro.png'],
    dateRange: "May 2026 - Aug 2026 · 4 mos · Remote, Toronto, ON · Part-Time",
    description: (
      <div>
        <p>
          <strong>Building a next-generation, AI-assisted version of a core System Micro product</strong> end-to-end, from architecture through delivery, using AI-assisted full-stack development to move from concept to working software at a rapid pace. Full details are under NDA, but the work spans modern frontend and backend engineering, iterative AI-assisted prototyping, and shipping production-ready features solo.
        </p>
      </div>
    ),

    tags: ["AI-Assisted Development", "Full-Stack", "Rapid Prototyping", "Product Engineering"],
  },

  {
    index: 2,
    title: "AI Software Engineer Co-op",
    company: "Rivos (Meta)",
    logos: ['/images/Meta.svg', '/images/Rivos.svg'],
    dateRange: "Sept 2025 - Jan 2026 · 5 mos · Manhattan, NY",
    description: (
      <div>
        <p>
          <strong>Built "GpuCompute," a Perfetto plugin for cycle-accurate GPU kernel performance analysis</strong>, designed to feel familiar to developers coming from NVIDIA Nsight Compute while bringing trace-based, system-level observability to the workflow. The plugin combines cycle-accurate kernel timelines with structured metrics (occupancy, throughput, stalls) in one place, supporting multiple GPU vendors and architectures through modular metric registries and terminology mappings.
        </p>
        <br />
        <p>
          <strong>Contributed upstream to Google's Perfetto open-source TraceProcessor</strong> to add track-description support, and extended Perfetto's tracing tools to launch kernels via config profiles, replacing ad-hoc environment variables and CLI args.
        </p>
        <br />
        <p>
          Later <strong>officially merged "GpuCompute" into Google's Perfetto project</strong> as an open-source contribution, forward-compatible with Nvidia hardware.
        </p>
      </div>
    ),

    tags: ["Perfetto", "TraceProcessor", "GPU Kernels", "TypeScript", "Open Source", "Nvidia Nsight"],
  },

  {
    index: 3,
    title: "AI Software Engineer Co-op",
    company: "Rivos (Meta)",
    logos: ['/images/Meta.svg', '/images/Rivos.svg'],
    dateRange: "Jan 2025 - Apr 2025 · 4 mos · Remote, Santa Clara, CA",
    description: (
      <div>
        <p>
          <strong>Engineered a structured GPU performance metrics dashboard</strong> covering speed-of-light throughput, launch statistics, occupancy, and workload analysis, with baseline compatibility to view relative and absolute diffs across runs.
        </p>
        <br />
        <p>
          <strong>Enabled automated bottleneck detection</strong> to surface hardware optimization opportunities for CUDA kernels, distinguishing between memory- and compute-bound kernels and optimizing host-runtime behavior for a <strong>9.9% performance improvement</strong>.
        </p>
        <br />
        <p>
          <strong>Supported Nvidia hardware trace collection and OpenCL terminology mappings</strong> for the open-source community, extending the GPU Compute tooling built during the previous co-op.
        </p>
      </div>
    ),

    tags: ["CUDA", "GPU Performance", "Perfetto", "OpenCL", "Nvidia", "Bottleneck Analysis"],
  },

  {
    index: 4,
    title: "Software Developer Co-op",
    company: "SystemMicro",
    logos: ['/images/SystemMicro.png'],
    dateRange: "May 2024 - Sept 2024 · 4 mos · Remote, Toronto, ON",
    description: (
      <div>
        <p>
          <strong>Architected and implemented an end-to-end Student Life Cycle (SLC) application</strong> designed to streamline the entire student enrollment process, from lead capture to admission, fee processing, and account creation, enabling seamless access to student and university services such as timetable management and academic resources.
        </p>
        <br />
        <p>
          <strong>Enhanced client conversion rates by integrating advanced automation workflows</strong> that intelligently managed the lead-to-client process. This involved conducting in-depth market and competitor analysis, executing agile sprints, and rapidly developing MVPs for client demonstrations, significantly improving the efficiency and effectiveness of the enrollment process.
        </p>
      </div>
    ),

    tags: ["Workflows", "Automation", "Responsive Design", "CSS", "Analytics and Reports", "Project Management"],

  },

  {
    index: 5,
    title: "Robotics/Software Developer",
    company: "Cloverdale Robotics",
    logos: ['/images/CLR.png'],
    dateRange: "Jun 2022 - Apr 2023 · 11 mos · Surrey, BC",
    description: (
      <div>
        <p>
          <strong>Developed four advanced monthly robotic projects</strong> using Arduino, showcasing proficiency in hardware integration and programming with various sensors and motors to create highly responsive and efficient systems.
        </p>
        <br />
        <p>
          <strong>Pioneered sophisticated Python applications and mobile games</strong> that leveraged databases and AI algorithms to significantly improve functionality and performance, resulting in a 2x increase in user engagement and enrollment in educational courses.
        </p>
      </div>
    ),

    tags: ["Arduino", "Python", "JavaScript", "CSS"],
  },

  {
    index: 6,
    title: "Web Developer",
    company: "Stylish Tile",
    logos: ['/images/StylishTileLogo.png'],
    dateRange: "Sept 2020 - Jun 2021 · 10 mos · Coquitlam, BC",
    description: (
      <div>
        <p>
          <strong>Engineered and deployed fully responsive, multi-page websites</strong> leveraging HTML, CSS, and vanilla JavaScript, ensuring cross-browser compatibility and a smooth user experience across various devices and screen sizes.
        </p>
        <br />
        <p>
          <strong>Integrated advanced photo libraries and custom animations</strong> using JavaScript frameworks and CSS transitions, significantly enhancing user engagement and leading to a measurable increase in conversion rates, including higher sales and customer inquiries.
        </p>
      </div>
    ),

    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  }
  


];