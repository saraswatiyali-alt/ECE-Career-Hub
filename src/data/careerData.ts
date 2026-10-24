import { CareerField, FreeCourse, CompanyHiring } from '../types/career';

export const CAREER_FIELDS: CareerField[] = [
  {
    id: 'embedded-firmware',
    title: 'Embedded & Firmware',
    symbol: '</>',
    badgeText: 'Core ECE Domain',
    shortDescription: 'Write low-level code directly controlling microcontrollers, DSPs, and hardware peripherals.',
    overview: 'Embedded & Firmware engineering sits at the boundary of hardware and software. Engineers program silicon devices, write low-level drivers (GPIO, I2C, SPI, UART, CAN), optimize memory constraints, and build deterministic real-time systems running FreeRTOS or Embedded Linux.',
    marketOutlook: 'Massive global demand driven by smart devices, automotive ECUs, industrial automation, and consumer electronics.',
    tags: ['C/C++', 'Microcontrollers', 'FreeRTOS', 'Firmware', 'STM32', 'ARM Cortex', 'Debugging'],
    subRoles: [
      {
        title: 'Embedded Software Engineer',
        description: 'Designs and implements application logic on microcontrollers using C/C++, manages peripherals, and implements device communication protocols.',
        level: 'Entry',
        avgFresherSalary: '₹6 - 14 LPA ($75k - $95k)',
        avgExpSalary: '₹18 - 38 LPA ($120k - $175k)',
        keySkills: ['Embedded C', 'STM32/ESP32', 'I2C/SPI/UART', 'Oscilloscopes', 'State Machines']
      },
      {
        title: 'Firmware Engineer',
        description: 'Develops low-level bootloaders, hardware abstraction layers (HAL), device drivers, and power management firmware directly above registers.',
        level: 'Entry',
        avgFresherSalary: '₹7 - 16 LPA ($80k - $105k)',
        avgExpSalary: '₹20 - 42 LPA ($130k - $190k)',
        keySkills: ['C/Assembly', 'Bare-Metal Programming', 'JTAG/SWD', 'Memory Layout', 'Linker Scripts']
      },
      {
        title: 'RTOS / Systems Developer',
        description: 'Builds deterministic, multi-threaded real-time systems using FreeRTOS, Zephyr, or VxWorks with strict deadline guarantees and preemptive scheduling.',
        level: 'Mid',
        avgFresherSalary: '₹8 - 18 LPA ($85k - $110k)',
        avgExpSalary: '₹22 - 46 LPA ($140k - $210k)',
        keySkills: ['FreeRTOS/Zephyr', 'Mutex/Semaphores', 'Task Scheduling', 'Race Conditions', 'Memory Profiling']
      },
      {
        title: 'Board Support Package (BSP) Engineer',
        description: 'Ports Embedded Linux, U-Boot bootloaders, device tree configurations, and custom kernel modules for custom hardware platforms.',
        level: 'Mid',
        avgFresherSalary: '₹9 - 18 LPA ($90k - $115k)',
        avgExpSalary: '₹25 - 50 LPA ($150k - $220k)',
        keySkills: ['Embedded Linux', 'Yocto Project', 'Kernel Drivers', 'U-Boot', 'Device Tree']
      },
      {
        title: 'Embedded Test & Validation Engineer',
        description: 'Develops automated test benches, Hardware-in-the-Loop (HIL) setups, unit tests (Unity/Ceedling), and validates silicon functionality under stress.',
        level: 'Entry',
        avgFresherSalary: '₹5 - 12 LPA ($70k - $90k)',
        avgExpSalary: '₹16 - 32 LPA ($110k - $160k)',
        keySkills: ['Python Automation', 'HIL Testing', 'LabVIEW', 'Unity/Ceedling', 'Logic Analyzers']
      }
    ],
    skillsRequired: [
      {
        category: 'Fundamentals',
        whatToLearn: 'Sensors, actuators, analog-to-digital converters (ADC), PWM, timers, and basic electronics',
        importance: 'Essential',
        tools: ['Multimeters', 'Oscilloscopes', 'Logic Analyzers', 'Datasheets']
      },
      {
        category: 'Programming',
        whatToLearn: 'Deep C programming, pointers, bitwise manipulation, memory management, structure alignment, volatile keyword, and modern C++',
        importance: 'Essential',
        tools: ['GCC ARM', 'Clang', 'Make/CMake', 'GDB']
      },
      {
        category: 'Protocols & Networking',
        whatToLearn: 'I2C, SPI, UART, CAN 2.0/CAN-FD, USB, Ethernet, Modbus, BLE, and device communication',
        importance: 'Essential',
        tools: ['Saleae Logic', 'Wireshark', 'CANalyzer', 'Serial Terminals']
      },
      {
        category: 'Embedded Architecture & RTOS',
        whatToLearn: 'ARM Cortex-M architecture, NVIC interrupts, FreeRTOS tasks, queues, semaphores, mutexes, and memory protection units (MPU)',
        importance: 'Essential',
        tools: ['FreeRTOS', 'STM32CubeIDE', 'Keil MDK', 'Zephyr RTOS']
      },
      {
        category: 'Debugging & Tooling',
        whatToLearn: 'JTAG/SWD hardware debuggers, register inspection, static analysis, git version control, and unit testing',
        importance: 'Recommended',
        tools: ['J-Link', 'ST-Link', 'OpenOCD', 'Cppcheck', 'Git']
      }
    ],
    roadmapSummary: 'C/C++ → Microcontrollers & Embedded C → Sensors & Protocols → RTOS & Concurrency → Embedded Linux / Edge → Capstone Projects',
    roadmap: [
      {
        stepNumber: 1,
        title: 'Master C Programming & Bitwise Mastery',
        duration: '4-6 Weeks',
        description: 'Learn C from a hardware perspective: pointer arithmetic, memory mapping, structs/unions, bit-masking, bit-shifting, and volatile qualifiers.',
        keyTopics: ['Pointers & dynamic memory', 'Bitwise AND/OR/XOR/NOT/shifts', 'Endianness', 'Type casting & structs', 'Preprocessor macros'],
        recommendedPractice: 'Write your own memory allocator or bit manipulation routines without standard library helpers.'
      },
      {
        stepNumber: 2,
        title: 'Microcontroller Architecture & Bare-Metal C',
        duration: '4-6 Weeks',
        description: 'Understand ARM Cortex-M or AVR architecture. Write bare-metal register-level code to configure GPIO, Clocks, Timers, and ADC without third-party libraries.',
        keyTopics: ['Memory Map & Memory-Mapped I/O', 'Reset vector & Startup code', 'Clock trees & Prescalers', 'Interrupt service routines (ISR)', 'NVIC priority'],
        recommendedPractice: 'Blink an LED, generate PWM for motor speed, and configure an external interrupt pin completely from scratch using memory addresses.'
      },
      {
        stepNumber: 3,
        title: 'Master Communication Protocols',
        duration: '3-5 Weeks',
        description: 'Deep dive into hardware communication buses. Implement master/slave communication, handle clock stretching, frame synchronization, and CRC checksums.',
        keyTopics: ['UART with circular buffer & ring buffers', 'SPI high-speed transfers', 'I2C addressing and ACK/NACK', 'DMA (Direct Memory Access) transfers'],
        recommendedPractice: 'Interface an I2C OLED display or SPI Flash memory chip using DMA to offload the CPU.'
      },
      {
        stepNumber: 4,
        title: 'Real-Time Operating Systems (RTOS)',
        duration: '4-6 Weeks',
        description: 'Transition from single super-loops to preemptive multi-tasking. Manage concurrency, priority inversion, task notifications, and shared resource protection.',
        keyTopics: ['FreeRTOS kernel', 'Preemptive vs cooperative scheduling', 'Semaphores & Mutexes', 'Message queues & Event groups', 'Software timers'],
        recommendedPractice: 'Build a multi-tasking weather monitor where one task samples sensors, another updates the UI, and a third handles wireless telemetry.'
      },
      {
        stepNumber: 5,
        title: 'Production Debugging, Testing & Embedded Linux',
        duration: '4-6 Weeks',
        description: 'Learn industry-standard hardware debugging with JTAG/SWD, profiling, unit testing with Ceedling, and introduction to Embedded Linux / Yocto.',
        keyTopics: ['J-Link/GDB debugging', 'Hardware breakpoints & watchpoints', 'Stack overflow detection', 'Embedded Linux boot sequence', 'Device tree syntax'],
        recommendedPractice: 'Setup a complete automated CI pipeline that runs unit tests on your C code with mocked hardware registers.'
      }
    ],
    projectIdeas: [
      {
        title: 'Smart Energy Monitor with CAN/Modbus Logging',
        difficulty: 'Intermediate',
        summary: 'Non-invasive AC power monitor calculating active/reactive power, power factor, and logging telemetry via industrial CAN bus to an SD card.',
        componentsOrTools: ['STM32F4', 'Current Transformer (CT)', 'MCP2551 CAN Transceiver', 'FatFS on SPI Flash', 'FreeRTOS'],
        learningOutcome: 'Real-time ADC sampling with DMA, power calculations, CAN message packing, and fail-safe file systems.'
      },
      {
        title: 'Deterministic FreeRTOS Flight Controller Unit',
        difficulty: 'Advanced',
        summary: 'Quadrotor IMU stabilization system executing 500 Hz PID loops, sensor fusion via complementary filter, and fail-safe radio receiver parsing.',
        componentsOrTools: ['ARM Cortex-M4 (STM32)', 'MPU-6050 6-DOF IMU', 'PWM Motor ESCs', 'FreeRTOS', 'Logic Analyzer'],
        learningOutcome: 'Hard real-time constraints, interrupt latency management, sensor fusion math, and watchdog timers.'
      },
      {
        title: 'Ultra Low-Power Environmental Beacon',
        difficulty: 'Beginner',
        summary: 'Battery-operated sensor node waking every 60 seconds from Deep Sleep, measuring temperature and humidity, and broadcasting via BLE beacon.',
        componentsOrTools: ['ESP32 or nRF52840', 'BME280', 'Coin cell battery', 'Oscilloscope current shunt'],
        learningOutcome: 'Power modes (sleep, standby, stop), brownout detection, RTC timer wake-up, and energy profiling.'
      }
    ],
    hiringCompanies: [
      {
        name: 'Texas Instruments',
        domain: 'embedded-firmware',
        logoText: 'TI',
        fresherSalary: '₹14 - 22 LPA ($100k - $125k)',
        experiencedSalary: '₹26 - 55 LPA ($150k - $230k)',
        hiringRoles: ['Embedded Software Engineer', 'Applications Engineer', 'MCU Firmware Developer'],
        locations: ['Bangalore', 'Dallas', 'Freising', 'Shanghai'],
        hiringRounds: ['Online Technical Assessment (C & Digital Logic)', 'Core Embedded Round (Pointers, Peripherals, Timers)', 'Architecture & Debugging Round', 'HR & Behavioral'],
        interviewTips: 'Expect questions on memory alignment, writing a circular buffer in C, volatile keyword mechanics, and solving pointer arithmetic puzzles on a whiteboard.',
        website: 'https://careers.ti.com'
      },
      {
        name: 'STMicroelectronics',
        domain: 'embedded-firmware',
        logoText: 'STM',
        fresherSalary: '₹10 - 18 LPA ($85k - $110k)',
        experiencedSalary: '₹22 - 45 LPA ($130k - $190k)',
        hiringRoles: ['STM32 Firmware Engineer', 'Automotive Embedded Engineer', 'IoT Applications Specialist'],
        locations: ['Greater Noida', 'Bangalore', 'Geneva', 'Catania'],
        hiringRounds: ['Aptitude & C Coding Test', 'Technical Interview 1 (ARM Architecture & Protocols)', 'Technical Interview 2 (RTOS & Low-Power Design)', 'Managerial'],
        interviewTips: 'Deep understanding of ARM Cortex-M exception handling, I2C clock stretching, and FreeRTOS semaphore vs mutex differences.',
        website: 'https://st.com/careers'
      },
      {
        name: 'Qualcomm',
        domain: 'embedded-firmware',
        logoText: 'QCOM',
        fresherSalary: '₹18 - 28 LPA ($115k - $145k)',
        experiencedSalary: '₹35 - 75 LPA ($170k - $260k)',
        hiringRoles: ['Modem Firmware Engineer', 'BSP Linux Kernel Engineer', 'Embedded DSP Software Engineer'],
        locations: ['Hyderabad', 'Bangalore', 'San Diego', 'Cork'],
        hiringRounds: ['HackerRank Coding (Data Structures & C)', 'Technical Round 1 (C Pointers, Bit Manipulation, Operating Systems)', 'Technical Round 2 (Device Drivers & Computer Architecture)', 'Director Round'],
        interviewTips: 'Master bitwise tricks (reversing bits, finding parity, bitmasking) and deep knowledge of cache coherence and DMA in modern SoCs.',
        website: 'https://qualcomm.com/careers'
      },
      {
        name: 'Robert Bosch',
        domain: 'embedded-firmware',
        logoText: 'BOSCH',
        fresherSalary: '₹7 - 14 LPA ($75k - $95k)',
        experiencedSalary: '₹18 - 36 LPA ($120k - $170k)',
        hiringRoles: ['Automotive Embedded Software Developer', 'AUTOSAR Engineer', 'ECU Firmware Engineer'],
        locations: ['Bangalore', 'Coimbatore', 'Stuttgart', 'Detroit'],
        hiringRounds: ['Online ECE Aptitude & C Test', 'Technical Round (C, CAN Bus, Microcontrollers)', 'Automotive Systems & Safety Round', 'HR'],
        interviewTips: 'Focus on CAN bus arbitration, bit timing, MISRA C compliance principles, and finite state machine implementation.',
        website: 'https://bosch.com/careers'
      }
    ],
    featuredCourseId: 'course-embedded-c-mastery'
  },
  {
    id: 'vlsi-chip-design',
    title: 'VLSI & Chip Design',
    symbol: '⚡IC',
    badgeText: 'High Demand & Highest Pay',
    shortDescription: 'Design, verify, and fabricate silicon microchips, RISC-V cores, and multi-billion transistor SoCs.',
    overview: 'VLSI (Very Large Scale Integration) powers the modern semiconductor industry. Engineers use HDLs (Verilog, SystemVerilog, VHDL) and specialized Electronic Design Automation (EDA) suites from Synopsys and Cadence to design microprocessors, memory controllers, and AI accelerators from RTL logic down to nanometer-scale silicon lithography.',
    marketOutlook: 'Surging demand backed by global CHIPS acts, semiconductor fabs, custom AI accelerators (TPUs/NPUs), and automotive silicon.',
    tags: ['Verilog', 'SystemVerilog', 'ASIC', 'FPGA', 'Physical Design', 'UVM', 'Synthesis', 'STA'],
    subRoles: [
      {
        title: 'RTL Design Engineer',
        description: 'Translates architectural hardware specs into clean, synthesizable Verilog/SystemVerilog register-transfer logic.',
        level: 'Entry',
        avgFresherSalary: '₹12 - 24 LPA ($95k - $125k)',
        avgExpSalary: '₹28 - 65 LPA ($160k - $260k)',
        keySkills: ['Verilog/SystemVerilog', 'Digital Design', 'FSM Design', 'Clock Domain Crossing (CDC)', 'RTL Synthesis']
      },
      {
        title: 'Design Verification (DV) Engineer (UVM)',
        description: 'Builds comprehensive verification testbenches in SystemVerilog using Universal Verification Methodology (UVM) to simulate and catch bugs before tape-out.',
        level: 'Entry',
        avgFresherSalary: '₹10 - 22 LPA ($90k - $120k)',
        avgExpSalary: '₹26 - 60 LPA ($150k - $240k)',
        keySkills: ['SystemVerilog', 'UVM Framework', 'Assertions (SVA)', 'Coverage-Driven Verification', 'Python/Perl']
      },
      {
        title: 'Physical Design (PD) Engineer',
        description: 'Takes synthesized gate-level netlists through floorplanning, placement, clock tree synthesis (CTS), routing, and DRC/LVS physical sign-off.',
        level: 'Mid',
        avgFresherSalary: '₹11 - 22 LPA ($90k - $120k)',
        avgExpSalary: '₹28 - 65 LPA ($160k - $250k)',
        keySkills: ['Floorplanning', 'CTS', 'Static Timing Analysis (STA)', 'Synopsys ICC2 / Cadence Innovus', 'DRC/LVS']
      },
      {
        title: 'Design for Testability (DFT) Engineer',
        description: 'Inserts scan chains, ATPG (Automatic Test Pattern Generation), BIST (Built-in Self-Test), and boundary scan to test chips post-fabrication.',
        level: 'Mid',
        avgFresherSalary: '₹10 - 20 LPA ($85k - $115k)',
        avgExpSalary: '₹24 - 55 LPA ($140k - $220k)',
        keySkills: ['Scan Insertion', 'ATPG / Mentor Tessent', 'Memory BIST', 'JTAG IEEE 1149.1', 'Fault Models']
      },
      {
        title: 'Analog / Mixed-Signal (AMS) IC Designer',
        description: 'Designs transistor-level operational amplifiers, bandgap references, PLLs, ADCs, and DACs using Cadence Virtuoso.',
        level: 'Senior',
        avgFresherSalary: '₹12 - 25 LPA ($100k - $130k)',
        avgExpSalary: '₹30 - 70 LPA ($170k - $280k)',
        keySkills: ['Cadence Virtuoso', 'Spectre Simulation', 'Op-Amps & Bandgap', 'Noise Analysis', 'FinFET Physics']
      }
    ],
    skillsRequired: [
      {
        category: 'Fundamentals',
        whatToLearn: 'Boolean algebra, combinational & sequential circuits, CMOS inverter characteristics, propagation delay, and setup/hold times',
        importance: 'Essential',
        tools: ['Digital Logic Simulators', 'Logisim', 'SPICE']
      },
      {
        category: 'Hardware Description Languages',
        whatToLearn: 'Verilog-2001, SystemVerilog for design & verification, synthesizable vs non-synthesizable constructs, and procedural blocks',
        importance: 'Essential',
        tools: ['EDA Playground', 'ModelSim/Questa', 'Icarus Verilog', 'GTKWave']
      },
      {
        category: 'Verification & Methodologies',
        whatToLearn: 'Object-Oriented SystemVerilog, UVM classes, constrained random testing, functional coverage, and SystemVerilog Assertions (SVA)',
        importance: 'Essential',
        tools: ['Synopsys VCS', 'Cadence Xcelium', 'UVM 1.2']
      },
      {
        category: 'Timing & Backend',
        whatToLearn: 'Static Timing Analysis (STA), clock skew, clock jitter, timing constraints (SDC), setup/hold violation fixes, and synthesis',
        importance: 'Essential',
        tools: ['Synopsys Design Compiler', 'PrimeTime', 'Innovus']
      },
      {
        category: 'Scripting & Automation',
        whatToLearn: 'Tcl scripting for EDA tool automation, Python for regression test analysis, and Shell scripting',
        importance: 'Recommended',
        tools: ['Tcl', 'Python', 'Makefiles', 'Bash']
      }
    ],
    roadmapSummary: 'Digital Logic Fundamentals → Verilog HDL → FPGA Prototyping → SystemVerilog & UVM → Static Timing Analysis (STA) & ASIC Flow',
    roadmap: [
      {
        stepNumber: 1,
        title: 'Digital Electronics & CMOS Transistor Theory',
        duration: '4-5 Weeks',
        description: 'Deeply master flip-flops, multiplexers, ALUs, setup & hold times, metastability, clock domains, and CMOS inverter characteristics.',
        keyTopics: ['Setup & Hold time calculations', 'Metastability & Synchronizers', 'Moore & Mealy State Machines', 'CMOS stick diagrams & logic gates'],
        recommendedPractice: 'Calculate maximum clock frequency given flip-flop Tsu, Thold, and combinational gate delays.'
      },
      {
        stepNumber: 2,
        title: 'Verilog HDL & Register Transfer Level (RTL)',
        duration: '5-6 Weeks',
        description: 'Write synthesizable Verilog for combinational and sequential hardware. Understand blocking vs non-blocking assignments (= vs <=).',
        keyTopics: ['Blocking vs Non-blocking assignments', 'Parameterized modules', 'Clock dividers & counters', 'FSM design patterns', 'Testbench writing'],
        recommendedPractice: 'Design an SPI Master controller or UART Transmitter with configurable baud rates and simulate in Icarus Verilog.'
      },
      {
        stepNumber: 3,
        title: 'FPGA Implementation & Prototyping',
        duration: '4-5 Weeks',
        description: 'Synthesize your designs onto physical FPGA hardware (Xilinx Artix-7 or Intel Cyclone). Map I/O constraints, inspect resource utilization, and debug on-chip.',
        keyTopics: ['LUTs, Flip-Flops, DSP Slices, and BRAM', 'Xilinx Vivado / Intel Quartus', 'Pin constraints (XDC)', 'Integrated Logic Analyzer (ILA)'],
        recommendedPractice: 'Deploy a VGA graphics generator or hardware calculator on an FPGA board with live button/switch inputs.'
      },
      {
        stepNumber: 4,
        title: 'SystemVerilog & UVM Verification',
        duration: '6-8 Weeks',
        description: 'Learn the verification language of the semiconductor industry. Object-Oriented programming in SV, classes, polymorphism, interfaces, and UVM components.',
        keyTopics: ['Constrained Random Verification', 'Functional & Code Coverage', 'UVM Driver, Monitor, Sequencer, Scoreboard', 'SystemVerilog Assertions (SVA)'],
        recommendedPractice: 'Build a complete UVM testbench verifying an AXI/APB bus protocol interface with randomized transactions.'
      },
      {
        stepNumber: 5,
        title: 'ASIC Backend Flow & Static Timing Analysis',
        duration: '5-7 Weeks',
        description: 'Understand the journey from RTL to GDSII silicon layout: Logic Synthesis, Floorplanning, CTS, Routing, STA, and sign-off DRC/LVS checks.',
        keyTopics: ['Standard cell libraries', 'Synopsys Design Constraints (.sdc)', 'Setup & Hold slack calculations', 'Open-source OpenLane/SkyWater 130nm flow'],
        recommendedPractice: 'Tape out a small RISC-V CPU core using the open-source OpenLane / Tiny Tapeout ASIC toolchain.'
      }
    ],
    projectIdeas: [
      {
        title: 'Pipelined 32-bit RISC-V (RV32I) Processor Core',
        difficulty: 'Advanced',
        summary: 'Complete 5-stage pipelined RISC-V CPU core featuring instruction fetch, decode, execute, memory, and writeback with hazard detection and forwarding.',
        componentsOrTools: ['SystemVerilog', 'Vivado/ModelSim', 'RISC-V GNU Toolchain', 'GTKWave'],
        learningOutcome: 'Pipelining, branch prediction, data hazard forwarding units, and instruction set architecture (ISA) verification.'
      },
      {
        title: 'UVM Testbench for AXI4-Lite Peripheral',
        difficulty: 'Advanced',
        summary: 'Industrial-grade verification environment built with UVM test classes, transaction sequences, interface monitors, and self-checking scoreboards.',
        componentsOrTools: ['SystemVerilog', 'UVM 1.2', 'Questa / Synopsys VCS', 'Coverage Reports'],
        learningOutcome: 'Transaction-level modeling (TLM), constrained random test generation, functional coverage bins, and assertion checking.'
      },
      {
        title: 'Configurable Floating Point MAC Unit (FPGA)',
        difficulty: 'Intermediate',
        summary: 'IEEE 754 single-precision floating point Multiply-Accumulate (MAC) arithmetic unit optimized for low latency on Xilinx FPGA.',
        componentsOrTools: ['Verilog HDL', 'Vivado Simulator', 'Basys 3 / Nexys FPGA'],
        learningOutcome: 'Floating-point normalization, rounding modes, pipeline register balancing, and DSP slice utilization.'
      }
    ],
    hiringCompanies: [
      {
        name: 'Intel Corporation',
        domain: 'vlsi-chip-design',
        logoText: 'INTC',
        fresherSalary: '₹14 - 25 LPA ($100k - $130k)',
        experiencedSalary: '₹30 - 70 LPA ($160k - $260k)',
        hiringRoles: ['Silicon Design Engineer', 'Pre-Silicon Verification Engineer', 'Physical Design Engineer'],
        locations: ['Bangalore', 'Hillsboro (Oregon)', 'Santa Clara', 'Haifa'],
        hiringRounds: ['Aptitude & Digital Design Online Test', 'Technical Round 1 (Setup/Hold Times, FIFO, CDC)', 'Technical Round 2 (Verilog Coding & Computer Architecture)', 'Director Round'],
        interviewTips: 'Deep focus on FIFO depth calculation, asynchronous FIFO gray code pointers, setup/hold slack formulas, and CMOS gate-level sizing.',
        website: 'https://intel.com/jobs'
      },
      {
        name: 'NVIDIA',
        domain: 'vlsi-chip-design',
        logoText: 'NVDA',
        fresherSalary: '₹20 - 36 LPA ($125k - $160k)',
        experiencedSalary: '₹45 - 95 LPA ($190k - $320k)',
        hiringRoles: ['ASIC Hardware Engineer', 'GPU Verification Engineer', 'Physical Design Architect'],
        locations: ['Bangalore', 'Pune', 'Hyderabad', 'Santa Clara', 'Austin'],
        hiringRounds: ['Rigorous Coding & Logic Screening', 'Technical Round 1 (Digital Design & Timing)', 'Technical Round 2 (Architecture & SystemVerilog)', 'Technical Round 3 (EDA & Deep Hardware Questions)', 'Managerial'],
        interviewTips: 'Master clock domain crossing (CDC) synchronizers, multi-cycle paths, false paths, and write clean synthesizable Verilog for complex FSMs without latches.',
        website: 'https://nvidia.com/careers'
      },
      {
        name: 'Synopsys',
        domain: 'vlsi-chip-design',
        logoText: 'SNPS',
        fresherSalary: '₹12 - 22 LPA ($90k - $120k)',
        experiencedSalary: '₹26 - 55 LPA ($140k - $220k)',
        hiringRoles: ['R&D Engineer (EDA Tools)', 'Applications Consultant (Design Compiler / PrimeTime)', 'IP Verification Engineer'],
        locations: ['Bangalore', 'Hyderabad', 'Noida', 'Mountain View'],
        hiringRounds: ['Written Test (C++ & Digital Design & Data Structures)', 'Technical 1 (Graph Algorithms & Timing Analysis)', 'Technical 2 (EDA concepts & HDL)', 'HR'],
        interviewTips: 'Strong foundation in both C++ algorithms (graph traversal for timing paths) and digital design principles.',
        website: 'https://synopsys.com/careers'
      },
      {
        name: 'Texas Instruments (Kilby Labs / Silicon)',
        domain: 'vlsi-chip-design',
        logoText: 'TI',
        fresherSalary: '₹15 - 24 LPA ($100k - $125k)',
        experiencedSalary: '₹30 - 65 LPA ($150k - $240k)',
        hiringRoles: ['Analog IC Design Engineer', 'Digital Design Engineer', 'Characterization Engineer'],
        locations: ['Bangalore', 'Dallas', 'Freising'],
        hiringRounds: ['Core Subject Written Test', 'Technical Round 1 (Analog/Digital core)', 'Technical Round 2 (Deep transistor level/RTL)', 'HR'],
        interviewTips: 'For Analog roles, master small-signal models, poles and zeros, Bode plots, and op-amp topologies.',
        website: 'https://careers.ti.com'
      }
    ],
    featuredCourseId: 'course-verilog-digital-design'
  },
  {
    id: 'iot-connected-devices',
    title: 'IoT & Connected Devices',
    symbol: '📶 IoT',
    badgeText: 'Cloud & Hardware Bridge',
    shortDescription: 'Build smart connected products combining edge microcontrollers, wireless radios, MQTT, and cloud infrastructure.',
    overview: 'Internet of Things (IoT) connects the physical and digital worlds. ECE engineers build intelligent sensor nodes running low-power microcontrollers (ESP32, Nordic nRF, STM32), leverage wireless protocols (BLE, LoRaWAN, Zigbee, Wi-Fi 6), communicate with cloud platforms via MQTT/HTTPS, and implement edge AI models.',
    marketOutlook: 'Explosive expansion in smart cities, industrial IoT (IIoT), smart agriculture, remote health monitors, and smart homes.',
    tags: ['ESP32', 'MQTT', 'LoRaWAN', 'BLE', 'AWS IoT', 'Sensors', 'Edge AI', 'REST APIs'],
    subRoles: [
      {
        title: 'IoT Embedded Engineer',
        description: 'Develops microcontroller software for connected sensor nodes, manages low-power sleep cycles, and implements device telemetry.',
        level: 'Entry',
        avgFresherSalary: '₹5 - 12 LPA ($70k - $90k)',
        avgExpSalary: '₹16 - 35 LPA ($115k - $170k)',
        keySkills: ['ESP-IDF / Arduino', 'C/C++', 'MQTT/CoAP', 'Sensors & ADC', 'BLE 5.0']
      },
      {
        title: 'IoT Solutions Architect',
        description: 'Designs end-to-end IoT pipelines spanning device fleet provisioning, secure certificate management, cloud ingestion, and real-time dashboarding.',
        level: 'Senior',
        avgFresherSalary: '₹12 - 22 LPA ($90k - $125k)',
        avgExpSalary: '₹28 - 60 LPA ($150k - $240k)',
        keySkills: ['AWS IoT Core / Azure IoT', 'MQTT Brokers', 'System Architecture', 'Fleet Management', 'Time-Series DBs']
      },
      {
        title: 'Wireless / RF IoT Specialist',
        description: 'Optimizes RF link budgets, antenna tuning, battery life, and long-range communication over LoRa, NB-IoT, and cellular LTE-M networks.',
        level: 'Mid',
        avgFresherSalary: '₹7 - 15 LPA ($75k - $100k)',
        avgExpSalary: '₹18 - 38 LPA ($120k - $180k)',
        keySkills: ['LoRaWAN / ChirpStack', 'Antenna Matching', 'Network Servers', 'Link Budget', 'Spectrum Analyzers']
      },
      {
        title: 'Edge AI / TinyML Developer',
        description: 'Deploys lightweight quantized neural networks (TensorFlow Lite for Microcontrollers) directly on microcontrollers for sound/image classification.',
        level: 'Mid',
        avgFresherSalary: '₹8 - 18 LPA ($85k - $115k)',
        avgExpSalary: '₹22 - 45 LPA ($135k - $200k)',
        keySkills: ['TinyML', 'Edge Impulse', 'Quantization (INT8)', 'ARM CMSIS-NN', 'Sensor Fusion']
      }
    ],
    skillsRequired: [
      {
        category: 'Fundamentals',
        whatToLearn: 'Sensors (temperature, humidity, accelerometer, gas), actuators, relays, power management, and battery chemistry (LiPo/LiFePO4)',
        importance: 'Essential',
        tools: ['I2C/SPI Sensor breakout boards', 'Current monitors', 'Solar harvesting circuits']
      },
      {
        category: 'Programming',
        whatToLearn: 'C/C++, Python for scripting and edge gateways, asynchronous programming, JSON parsing, and memory safety',
        importance: 'Essential',
        tools: ['ESP-IDF', 'VS Code PlatformIO', 'MicroPython', 'Python asyncio']
      },
      {
        category: 'Networking & Wireless',
        whatToLearn: 'TCP/IP stack, UDP, MQTT broker architecture, CoAP, HTTP/REST, Bluetooth Low Energy (GATT services), and LoRaWAN',
        importance: 'Essential',
        tools: ['Mosquitto MQTT', 'Wireshark', 'Postman', 'ChirpStack']
      },
      {
        category: 'Backend & Cloud Integration',
        whatToLearn: 'Cloud IoT core services, pub/sub messaging, webhooks, time-series telemetry databases, and real-time visualization dashboards',
        importance: 'Essential',
        tools: ['AWS IoT Core', 'ThingsBoard', 'Grafana', 'InfluxDB', 'Firebase']
      },
      {
        category: 'IoT Security',
        whatToLearn: 'X.509 device certificates, TLS 1.3 encryption, secure boot, over-the-air (OTA) encrypted firmware updates, and hardware root of trust',
        importance: 'Recommended',
        tools: ['mbedTLS', 'OpenSSL', 'Cryptographic chips (ATECC608A)']
      }
    ],
    roadmapSummary: 'C/C++ → Microcontrollers & ESP32 → Sensors & Actuators → Wireless Protocols (BLE/LoRa) → MQTT & Cloud IoT → TinyML & Projects',
    roadmap: [
      {
        stepNumber: 1,
        title: 'Electronics & Microcontroller Fundamentals',
        duration: '3-4 Weeks',
        description: 'Master reading analog and digital sensors with microcontrollers. Learn ADC sampling, noise filtering, and actuator driving.',
        keyTopics: ['Voltage dividers & Op-amp buffers', 'Analog vs Digital sensors', 'Relays, MOSFET drivers, and PWM', 'PlatformIO setup'],
        recommendedPractice: 'Interface a BME280 sensor and calibrate readings against an analog reference.'
      },
      {
        stepNumber: 2,
        title: 'Modern Connected Microcontrollers (ESP32 / nRF52)',
        duration: '4-5 Weeks',
        description: 'Learn native ESP-IDF (or Zephyr) on the dual-core ESP32 or Nordic nRF chips. Configure Wi-Fi stations, softAPs, and BLE GATT servers.',
        keyTopics: ['ESP-IDF RTOS tasks', 'Non-Volatile Storage (NVS)', 'Wi-Fi provisioning', 'BLE advertising & GATT characteristics'],
        recommendedPractice: 'Create a custom BLE service allowing a smartphone app to configure Wi-Fi credentials dynamically.'
      },
      {
        stepNumber: 3,
        title: 'IoT Networking Protocols (MQTT, CoAP, HTTP)',
        duration: '4-5 Weeks',
        description: 'Understand lightweight machine-to-machine protocols. Set up local and cloud MQTT brokers with QoS 0, 1, and 2 guarantees.',
        keyTopics: ['MQTT pub/sub mechanics & keep-alive', 'Quality of Service (QoS) trade-offs', 'CoAP UDP protocol', 'JSON payload formatting'],
        recommendedPractice: 'Publish sensor telemetry to an Eclipse Mosquitto broker running on a Raspberry Pi or cloud instance.'
      },
      {
        stepNumber: 4,
        title: 'Cloud Platforms, Dashboards & Over-the-Air (OTA) Updates',
        duration: '4-6 Weeks',
        description: 'Connect hardware to AWS IoT Core, Azure IoT, or ThingsBoard. Build real-time alerts, graphs, and roll out secure remote firmware updates.',
        keyTopics: ['TLS encryption & X.509 certs', 'Device Shadows / Twins', 'Grafana & InfluxDB dashboards', 'Rollback-protected OTA updates'],
        recommendedPractice: 'Implement seamless OTA firmware upgrade: push a new binary from the cloud and recover automatically if verification fails.'
      },
      {
        stepNumber: 5,
        title: 'Long-Range Wireless & TinyML on the Edge',
        duration: '4-6 Weeks',
        description: 'Expand to LPWAN (LoRaWAN / NB-IoT) for kilometer-range communication and run neural networks directly on the microcontroller.',
        keyTopics: ['LoRa spreading factors & link budget', 'ChirpStack & The Things Network', 'TensorFlow Lite for Microcontrollers', 'Audio/gesture anomaly detection'],
        recommendedPractice: 'Build a solar-powered remote weather station communicating over 5km using LoRa to a central gateway.'
      }
    ],
    projectIdeas: [
      {
        title: 'IoT Smart Energy & Grid Monitor with Cloud Dashboard',
        difficulty: 'Intermediate',
        summary: 'Smart metering node measuring instantaneous RMS voltage, current, active power, and publishing telemetry every 5 seconds over secure MQTT to AWS IoT / ThingsBoard.',
        componentsOrTools: ['ESP32', 'PZEM-004T / CT Sensor', 'MQTT over TLS', 'ThingsBoard', 'Grafana'],
        learningOutcome: 'Energy monitoring algorithms, TLS certificate authentication on hardware, and time-series telemetry visualization.'
      },
      {
        title: 'LoRaWAN Agricultural Soil & Microclimate Sensor',
        difficulty: 'Advanced',
        summary: 'Solar-harvesting outdoor probe measuring soil moisture, NPK values, solar radiation, transmitting packets every 15 minutes over 10 km to a LoRaWAN gateway.',
        componentsOrTools: ['STM32L0 / SX1262 LoRa', 'Solar Cell & Supercapacitor', 'ChirpStack Network Server', 'Sleep current < 15uA'],
        learningOutcome: 'Ultra-low power design, deep sleep optimization, link budget calculations, and LPWAN gateway configuration.'
      },
      {
        title: 'TinyML Anomaly Detector for Industrial Motor Vibration',
        difficulty: 'Intermediate',
        summary: 'Sensor node sampling 3-axis accelerometer at 1 kHz, running an on-device quantized neural network to detect bearing wear and anomalies in real time.',
        componentsOrTools: ['Arduino Nano 33 BLE / ESP32', 'MPU-6050', 'Edge Impulse / TFLite Micro', 'Buzzer/Relay Alert'],
        learningOutcome: 'FFT feature extraction, dataset collection, model quantization, and edge inference timing.'
      }
    ],
    hiringCompanies: [
      {
        name: 'Schneider Electric',
        domain: 'iot-connected-devices',
        logoText: 'SE',
        fresherSalary: '₹7 - 14 LPA ($75k - $95k)',
        experiencedSalary: '₹18 - 36 LPA ($115k - $165k)',
        hiringRoles: ['IoT Embedded Developer', 'Smart Building Systems Engineer', 'Cloud Edge Firmware Specialist'],
        locations: ['Bangalore', 'Grenoble', 'Boston', 'Singapore'],
        hiringRounds: ['Aptitude & Technical Test', 'Embedded Systems & Networking Round', 'IoT Protocol & Security Architecture', 'Managerial'],
        interviewTips: 'Be ready to discuss Modbus vs MQTT, industrial protocols, and securing field devices against unauthorized firmware flashing.',
        website: 'https://se.com/careers'
      },
      {
        name: 'Honeywell',
        domain: 'iot-connected-devices',
        logoText: 'HON',
        fresherSalary: '₹8 - 15 LPA ($80k - $100k)',
        experiencedSalary: '₹20 - 40 LPA ($125k - $180k)',
        hiringRoles: ['Connected Devices Engineer', 'IoT Firmware Engineer', 'Industrial Wireless Specialist'],
        locations: ['Bangalore', 'Hyderabad', 'Charlotte', 'Prague'],
        hiringRounds: ['Online Technical Assessment', 'C++ & Networking Interview', 'Hardware & System Design Round', 'HR'],
        interviewTips: 'Expect questions on low-power battery optimization, BLE advertising packets, and handling packet loss in wireless sensor networks.',
        website: 'https://honeywell.com/careers'
      },
      {
        name: 'Cisco Systems',
        domain: 'iot-connected-devices',
        logoText: 'CSCO',
        fresherSalary: '₹14 - 24 LPA ($100k - $130k)',
        experiencedSalary: '₹28 - 60 LPA ($150k - $240k)',
        hiringRoles: ['IoT Networking Software Engineer', 'Embedded Security Engineer', 'Industrial Gateway Developer'],
        locations: ['Bangalore', 'San Jose', 'Research Triangle Park'],
        hiringRounds: ['Online Coding (C/C++/Python & Networking)', 'Technical 1 (OS, TCP/IP, Sockets)', 'Technical 2 (System Design & Security)', 'Executive Interview'],
        interviewTips: 'Deep understanding of TCP/IP handshakes, socket programming in C, Wi-Fi 6 standards, and public key cryptography.',
        website: 'https://cisco.com/careers'
      }
    ],
    featuredCourseId: 'course-iot-protocols-cloud'
  },
  {
    id: 'communication-telecom',
    title: 'Communication & Telecom',
    symbol: '📡 5G',
    badgeText: 'Wireless & Optical Tech',
    shortDescription: 'Engineer next-generation 5G/6G cellular networks, RF transceivers, satellite links, and optical communications.',
    overview: 'Communication & Telecommunications engineering powers global connectivity. From 5G New Radio (NR) beamforming and massive MIMO to satellite communication constellations (Starlink/OneWeb) and fiber-optic backbones, engineers design modulation algorithms, RF front-ends, antenna arrays, and protocol stacks.',
    marketOutlook: 'Rapid 5G rollout, upcoming 6G research, satellite internet mega-constellations, and defense radar modernization.',
    tags: ['5G NR', 'RF Engineering', 'OFDM', 'SDR', 'Satellite Comm', 'Antennas', 'DSP', 'Optical'],
    subRoles: [
      {
        title: '5G / 6G Systems Engineer',
        description: 'Designs physical layer (PHY) and MAC layer algorithms for 5G NR, beamforming vectors, and channel estimation models.',
        level: 'Mid',
        avgFresherSalary: '₹8 - 16 LPA ($80k - $105k)',
        avgExpSalary: '₹20 - 45 LPA ($130k - $190k)',
        keySkills: ['5G NR Standards (3GPP)', 'OFDM/MIMO', 'MATLAB/Simulink', 'Link Budget', 'Channel Coding']
      },
      {
        title: 'RF & Microwave Design Engineer',
        description: 'Designs RF circuits including low-noise amplifiers (LNAs), power amplifiers (PAs), mixers, and microstrip patch antennas.',
        level: 'Entry',
        avgFresherSalary: '₹7 - 15 LPA ($75k - $100k)',
        avgExpSalary: '₹18 - 40 LPA ($120k - $180k)',
        keySkills: ['Keysight ADS', 'Ansys HFSS', 'Smith Chart', 'S-Parameters', 'Vector Network Analyzers (VNA)']
      },
      {
        title: 'Software-Defined Radio (SDR) Engineer',
        description: 'Implements digital transceivers, frequency hopping, waveform synthesis, and demodulators on FPGA/DSP platforms.',
        level: 'Mid',
        avgFresherSalary: '₹9 - 18 LPA ($85k - $115k)',
        avgExpSalary: '₹22 - 48 LPA ($140k - $210k)',
        keySkills: ['GNU Radio', 'USRP / HackRF', 'C++/Python', 'QPSK/QAM Demodulation', 'FPGA DSP Blocks']
      },
      {
        title: 'Telecom Protocol Stack Developer',
        description: 'Develops 3GPP cellular protocol stacks (RRC, PDCP, RLC, MAC) for base stations (gNodeB) and user equipment (UE).',
        level: 'Entry',
        avgFresherSalary: '₹8 - 16 LPA ($80k - $105k)',
        avgExpSalary: '₹20 - 44 LPA ($130k - $190k)',
        keySkills: ['3GPP Specs', 'C/C++', 'ASN.1 Encoders', 'Wireshark Protocol Dissectors', 'Linux Networking']
      }
    ],
    skillsRequired: [
      {
        category: 'Fundamentals',
        whatToLearn: 'Electromagnetic theory, transmission lines, reflection coefficient, VSWR, Smith Chart, Maxwell equations, and antenna gain',
        importance: 'Essential',
        tools: ['Smith Chart tools', 'Ansys HFSS', 'CST Studio']
      },
      {
        category: 'Modulation & Digital Comm',
        whatToLearn: 'QPSK, 16/64/256-QAM, OFDM, spread spectrum, bit error rate (BER), Shannon capacity limit, and Nyquist theorem',
        importance: 'Essential',
        tools: ['MATLAB Communications Toolbox', 'Python NumPy/SciPy']
      },
      {
        category: 'Cellular & Wireless Standards',
        whatToLearn: '3GPP 5G NR architecture, numerologies, resource grid, Massive MIMO, beamforming, millimeter-wave (mmWave), and Wi-Fi 7',
        importance: 'Essential',
        tools: ['3GPP Specifications', 'Wireshark', 'Qualcomm QXDM']
      },
      {
        category: 'RF Hardware & Test Equipment',
        whatToLearn: 'Vector Network Analyzers (VNA), Spectrum Analyzers, RF impedance matching networks, Noise Figure, and Intermodulation Distortion',
        importance: 'Essential',
        tools: ['Keysight ADS', 'Rohde & Schwarz Instruments', 'VNA Calibration kits']
      },
      {
        category: 'Protocols & Telecom Software',
        whatToLearn: 'SIP, RTP, TCP/UDP optimizations for high-throughput wireless channels, and Linux kernel networking',
        importance: 'Recommended',
        tools: ['OpenAirInterface', 'srsRAN', 'GNU Radio']
      }
    ],
    roadmapSummary: 'Signals & Probability → Digital Modulation & Coding → RF & Antennas → 5G NR & Wireless Protocols → SDR / GNU Radio → Telecom Projects',
    roadmap: [
      {
        stepNumber: 1,
        title: 'Signals, Systems & Probability Foundations',
        duration: '4-5 Weeks',
        description: 'Master Fourier transforms, convolution, power spectral density (PSD), AWGN noise models, and signal-to-noise ratio (SNR) fundamentals.',
        keyTopics: ['Continuous & Discrete Fourier Transforms', 'Gaussian Random Variables', 'PSD and Auto-correlation', 'Matched filter theory'],
        recommendedPractice: 'Simulate BPSK transmission through an AWGN channel in Python and plot theoretical vs simulated BER curves.'
      },
      {
        stepNumber: 2,
        title: 'Digital Modulation & Error Control Coding',
        duration: '4-6 Weeks',
        description: 'Understand constellation diagrams, QPSK, 64-QAM, phase/frequency shift keying, LDPC codes, and Polar codes used in 5G.',
        keyTopics: ['Constellation mapping & Gray coding', 'In-phase & Quadrature (I/Q) signals', 'Convolutional & Turbo/LDPC codes', 'Inter-Symbol Interference (ISI)'],
        recommendedPractice: 'Build an eye diagram generator and compute EVM (Error Vector Magnitude) for distorted QAM symbols.'
      },
      {
        stepNumber: 3,
        title: 'RF Engineering, Transmission Lines & Antennas',
        duration: '5-6 Weeks',
        description: 'Understand high-frequency wave propagation. Master impedance matching with Smith charts, microstrip waveguides, and antenna radiation patterns.',
        keyTopics: ['Characteristic impedance (50 Ohm)', 'S-Parameters (S11, S21)', 'L/C and stub matching networks', 'Patch & dipole antenna design'],
        recommendedPractice: 'Design and simulate a 2.4 GHz microstrip patch antenna in Ansys HFSS or open-source NEC2.'
      },
      {
        stepNumber: 4,
        title: '5G NR Architecture & Modern Cellular Standards',
        duration: '5-6 Weeks',
        description: 'Dive into 3GPP 5G New Radio standards: flexible subcarrier spacing, OFDM resource grids, beam management, and Open RAN (O-RAN).',
        keyTopics: ['5G NR Frame structure', 'SSB (Synchronization Signal Blocks)', 'Beamforming & Massive MIMO', 'O-RAN architecture (CU, DU, RU)'],
        recommendedPractice: 'Calculate a complete 5G downlink link budget considering path loss, rain attenuation, antenna gains, and fade margin.'
      },
      {
        stepNumber: 5,
        title: 'Software-Defined Radio (SDR) & Real-World Prototyping',
        duration: '4-6 Weeks',
        description: 'Transmit and receive live radio signals using hardware SDRs (HackRF, RTL-SDR, USRP) and implement real-time software demodulators.',
        keyTopics: ['RTL-SDR / USRP interfaces', 'GNU Radio Companion', 'FM broadcast receiver', 'ADS-B aircraft tracker decoding'],
        recommendedPractice: 'Capture live ADS-B 1090 MHz aircraft beacons using RTL-SDR and plot aircraft positions on a local map.'
      }
    ],
    projectIdeas: [
      {
        title: 'Software-Defined Radio (SDR) QPSK Transceiver',
        difficulty: 'Advanced',
        summary: 'Full-duplex wireless text/image transmission link using HackRF / USRP with carrier frequency recovery (Costas Loop) and timing synchronization.',
        componentsOrTools: ['GNU Radio', 'HackRF One / RTL-SDR', 'Python', 'C++ DSP Blocks'],
        learningOutcome: 'Symbol synchronization, Costas loop for carrier recovery, root-raised-cosine filtering, and packet framing.'
      },
      {
        title: 'End-to-End 5G NR Link Budget & Coverage Simulator',
        difficulty: 'Intermediate',
        summary: 'Interactive simulation calculating coverage radius, path loss (3GPP TR 38.901 Urban Micro/Macro), SINR, and throughput for 5G mmWave.',
        componentsOrTools: ['MATLAB / Python', '3GPP propagation models', 'Streamlit / Web UI'],
        learningOutcome: 'Radio propagation physics, atmospheric absorption at 28 GHz, and beamforming array gains.'
      },
      {
        title: 'Microstrip Bandpass Filter & Patch Antenna for 2.4 GHz',
        difficulty: 'Intermediate',
        summary: 'Physical RF PCB layout and simulation of a coupled-line bandpass filter and matched antenna on FR4 substrate, verified with a NanoVNA.',
        componentsOrTools: ['KiCad RF tools / HFSS', 'NanoVNA Vector Network Analyzer', 'FR4 Substrate', 'SMA Connectors'],
        learningOutcome: 'S-parameter measurement, return loss (S11), bandwidth calculation, and PCB dielectric losses.'
      }
    ],
    hiringCompanies: [
      {
        name: 'Ericsson',
        domain: 'communication-telecom',
        logoText: 'ERIC',
        fresherSalary: '₹8 - 16 LPA ($80k - $105k)',
        experiencedSalary: '₹20 - 45 LPA ($130k - $190k)',
        hiringRoles: ['5G Baseband Software Engineer', 'RF Systems Engineer', 'Telecom Network Specialist'],
        locations: ['Bangalore', 'Stockholm', 'Plano (Texas)', 'Ottawa'],
        hiringRounds: ['Online Aptitude & Telecom Technical Test', 'Technical Round 1 (Modulation, 5G NR, Signal Processing)', 'Technical Round 2 (C++ & Networking)', 'HR'],
        interviewTips: 'Master OFDM advantages over single carrier, cyclic prefix role, and 5G numerologies (subcarrier spacing).',
        website: 'https://ericsson.com/careers'
      },
      {
        name: 'Nokia Networks',
        domain: 'communication-telecom',
        logoText: 'NOK',
        fresherSalary: '₹8 - 15 LPA ($80k - $100k)',
        experiencedSalary: '₹19 - 42 LPA ($125k - $180k)',
        hiringRoles: ['O-RAN Software Developer', 'RF Hardware Engineer', 'Wireless System Verification Engineer'],
        locations: ['Bangalore', 'Chennai', 'Espoo', 'Munich'],
        hiringRounds: ['Aptitude & Technical Screening', 'Core Telecom Technical Round', 'System Architecture & Linux Round', 'HR'],
        interviewTips: 'Strong grasp of Open-RAN interfaces (eCPRI, Fronthaul 7.2x split) and wireless protocol stacks.',
        website: 'https://nokia.com/careers'
      },
      {
        name: 'Qualcomm (Modem & RF)',
        domain: 'communication-telecom',
        logoText: 'QCOM',
        fresherSalary: '₹18 - 28 LPA ($115k - $145k)',
        experiencedSalary: '₹35 - 75 LPA ($170k - $260k)',
        hiringRoles: ['Modem Systems Engineer', 'RF Front-End (RFFE) IC Designer', '5G PHY Layer Developer'],
        locations: ['Hyderabad', 'Bangalore', 'San Diego', 'Boulder'],
        hiringRounds: ['Online Coding Test', 'Technical 1 (Signals, Transforms, Modulation)', 'Technical 2 (MIMO, Channel Estimation, C++)', 'Director Round'],
        interviewTips: 'Be prepared for in-depth questions on channel equalization, Zero-Forcing vs MMSE receivers, and RF non-linearities.',
        website: 'https://qualcomm.com/careers'
      }
    ],
    featuredCourseId: 'course-modern-comm-5g'
  },
  {
    id: 'hardware-pcb-design',
    title: 'Hardware & PCB Design',
    symbol: '🎛️ PCB',
    badgeText: 'Board-Level Hardware',
    shortDescription: 'Design multi-layer printed circuit boards, high-speed signals, power delivery networks, and physical prototypes.',
    overview: 'Hardware & PCB Design engineers turn schematic ideas into reliable physical electronics. They select components, calculate power budgets, route high-speed differential pairs with controlled impedance (DDR, PCIe, USB 3.0), manage thermal dissipation, and ensure strict EMI/EMC compliance.',
    marketOutlook: 'Strong worldwide demand across consumer gadgets, medical devices, space avionics, and industrial instrumentation.',
    tags: ['Altium Designer', 'KiCad', 'High-Speed Layout', 'Power Electronics', 'Signal Integrity', 'EMI/EMC'],
    subRoles: [
      {
        title: 'Hardware Design Engineer',
        description: 'Creates schematics, selects active/passive components, performs power calculations, and leads initial board bring-up in the lab.',
        level: 'Entry',
        avgFresherSalary: '₹6 - 13 LPA ($70k - $95k)',
        avgExpSalary: '₹17 - 36 LPA ($115k - $165k)',
        keySkills: ['Schematic Capture', 'Component Selection', 'Power Calculations', 'Lab Bring-Up', 'BOM Management']
      },
      {
        title: 'High-Speed PCB Layout Engineer',
        description: 'Routes complex multi-layer boards (4 to 16+ layers) with length-matched differential pairs, microvias, and impedance control.',
        level: 'Entry',
        avgFresherSalary: '₹6 - 14 LPA ($75k - $95k)',
        avgExpSalary: '₹18 - 38 LPA ($120k - $175k)',
        keySkills: ['Altium Designer / KiCad', 'Controlled Impedance', 'Differential Pairs (USB/PCIe)', 'Length Tuning', 'DFM/DFA']
      },
      {
        title: 'Signal Integrity / Power Integrity (SI/PI) Engineer',
        description: 'Simulates high-speed eye diagrams, crosstalk, reflections, ground bounce, and decoupling capacitor effectiveness.',
        level: 'Mid',
        avgFresherSalary: '₹10 - 20 LPA ($85k - $115k)',
        avgExpSalary: '₹24 - 50 LPA ($140k - $210k)',
        keySkills: ['Ansys SIwave', 'HyperLynx', 'Eye Diagrams', 'TDR Testing', 'Decoupling Network Analysis']
      },
      {
        title: 'Power Electronics / SMPS Designer',
        description: 'Designs high-efficiency DC-DC buck, boost, and flyback converters, battery chargers, and thermal dissipation systems.',
        level: 'Mid',
        avgFresherSalary: '₹7 - 16 LPA ($75k - $105k)',
        avgExpSalary: '₹19 - 42 LPA ($125k - $185k)',
        keySkills: ['Buck/Boost Topologies', 'Magnetics / Inductor Sizing', 'MOSFET Gate Drivers', 'Thermal Design', 'Efficiency Optimization']
      }
    ],
    skillsRequired: [
      {
        category: 'Fundamentals',
        whatToLearn: 'Passive circuit analysis (R, L, C), diode characteristics, BJT/MOSFET switching behavior, and op-amp topologies',
        importance: 'Essential',
        tools: ['LTspice', 'Analog circuit simulators', 'Multimeters']
      },
      {
        category: 'EDA CAD Tools',
        whatToLearn: 'Hierarchical schematics, footprint generation, 4-layer & 6-layer stack-up planning, DRC rule checks, and Gerber file generation',
        importance: 'Essential',
        tools: ['KiCad 8', 'Altium Designer', 'Cadence OrCAD / Allegro']
      },
      {
        category: 'High-Speed & Signal Integrity',
        whatToLearn: 'Transmission line effects, microstrip vs stripline impedance (50 Ohm / 90 Ohm diff), crosstalk mitigation, and continuous return paths',
        importance: 'Essential',
        tools: ['Saturn PCB Toolkit', 'HyperLynx', 'Polar Instruments']
      },
      {
        category: 'Power Supply Design',
        whatToLearn: 'Linear LDO regulators, Switched Mode Power Supplies (SMPS), inductor saturation current, ripple calculation, and loop stability',
        importance: 'Essential',
        tools: ['TI WEBENCH', 'LTspice SMPS models', 'Electronic Loads']
      },
      {
        category: 'EMI/EMC & Manufacturing',
        whatToLearn: 'Radiated and conducted emissions, FCC/CE standards, ESD protection diodes, Design for Manufacturing (DFM), and soldering techniques',
        importance: 'Recommended',
        tools: ['Near-field probes', 'ESD guns', 'SMD hot-air rework station']
      }
    ],
    roadmapSummary: 'Schematic Capture & Component Selection → Multi-layer PCB Layout → Power Delivery & SMPS → High-Speed Routing & SI → Lab Bring-up & Testing',
    roadmap: [
      {
        stepNumber: 1,
        title: 'Electronics Circuit Simulation & Component Selection',
        duration: '4-5 Weeks',
        description: 'Simulate analog circuits, filtering, and switching transients in LTspice. Learn to read component datasheets and calculate power dissipation.',
        keyTopics: ['LTspice transient & AC analysis', 'MOSFET gate charge & Rds(on)', 'Capacitor ESR and voltage derating', 'Datasheet interpretation'],
        recommendedPractice: 'Simulate a 12V to 3.3V synchronous buck converter in LTspice and measure inductor ripple current.'
      },
      {
        stepNumber: 2,
        title: 'Schematic Design & Footprint Creation in KiCad / Altium',
        duration: '4-5 Weeks',
        description: 'Draw professional hierarchical schematics. Create IPC-compliant component footprints with 3D STEP models and thermal pads.',
        keyTopics: ['Hierarchical sheets', 'Net classes & design rules', 'IPC-7351 footprint standards', 'Bill of Materials (BOM) export'],
        recommendedPractice: 'Design the complete schematic for an ARM Cortex-M micro-development board with USB and LDO regulator.'
      },
      {
        stepNumber: 3,
        title: '4-Layer PCB Layout & Controlled Impedance',
        duration: '5-6 Weeks',
        description: 'Master multi-layer stack-ups (Signal - GND - Power - Signal). Calculate trace widths for 50-ohm single-ended and 90-ohm USB differential pairs.',
        keyTopics: ['Layer stack-ups & copper thickness', 'Ground plane continuity & return paths', 'Saturn PCB Toolkit calculations', 'Decoupling capacitor placement'],
        recommendedPractice: 'Route a 4-layer STM32 breakout board maintaining uninterrupted ground planes beneath all high-speed signals.'
      },
      {
        stepNumber: 4,
        title: 'High-Speed Layout & EMI/EMC Design',
        duration: '4-6 Weeks',
        description: 'Implement length matching, accordion serpentine tuning, guard traces, ferrite beads, and TVS ESD diodes for certified commercial products.',
        keyTopics: ['USB 2.0 / Ethernet routing rules', 'TVS diode placement for ESD', 'EMI radiated emissions mitigation', 'Thermal vias under power ICs'],
        recommendedPractice: 'Route a high-speed USB-C interface with ESD protection diodes placed closest to the connector pads.'
      },
      {
        stepNumber: 5,
        title: 'Gerber Generation, Prototyping & Lab Bring-Up',
        duration: '3-4 Weeks',
        description: 'Generate Gerbers, drill files, and pick-and-place files. Hand-solder 0603/QFN parts using solder paste, and verify with an oscilloscope.',
        keyTopics: ['Gerber / ODB++ verification', 'DFM guidelines with PCB fabs (JLCPCB / PCBWay)', 'SMD reflow & hot air soldering', 'Step-by-step lab power-on checklist'],
        recommendedPractice: 'Assemble a fabricated physical PCB, measure rail voltages before inserting the MCU, and document the bring-up log.'
      }
    ],
    projectIdeas: [
      {
        title: 'Multi-Layer STM32 Development Board with USB-C PD',
        difficulty: 'Intermediate',
        summary: '4-layer development board featuring STM32F401, USB-C Power Delivery sink (negotiating 9V/12V), on-board LDOs, and high-speed USB.',
        componentsOrTools: ['KiCad 8', 'STM32F4', 'CH224K USB-PD IC', 'Controlled Impedance', 'JLCPCB SMT'],
        learningOutcome: 'Controlled impedance calculation, USB differential pair routing, ground stitching, and USB-C CC pin configuration.'
      },
      {
        title: 'High-Efficiency Synchronous Buck-Boost Converter',
        difficulty: 'Advanced',
        summary: 'Programmable benchtop power supply module delivering 3V - 30V at 5A from any DC input with 95%+ peak efficiency and current limiting.',
        componentsOrTools: ['LT4320 / LM5176', 'Four-switch buck-boost', 'Current sense amplifier', 'LTspice & Altium'],
        learningOutcome: 'Switch-mode power layout, loop stability compensation, high-current thermal design, and magnetic saturation prevention.'
      },
      {
        title: 'Precision Analog Sensor Signal Conditioner Board',
        difficulty: 'Beginner',
        summary: 'Low-noise instrumentation amplifier circuit for measuring microvolt strain gauge signals with active 4th-order Butterworth low-pass filtering.',
        componentsOrTools: ['INA128 Instrumentation Amp', 'Active Filter Op-Amps', 'KiCad', 'Oscilloscope'],
        learningOutcome: 'Analog ground separation, star grounding, guard rings, and power supply rejection ratio (PSRR).'
      }
    ],
    hiringCompanies: [
      {
        name: 'Apple Hardware',
        domain: 'hardware-pcb-design',
        logoText: 'AAPL',
        fresherSalary: '₹18 - 32 LPA ($115k - $155k)',
        experiencedSalary: '₹40 - 85 LPA ($180k - $290k)',
        hiringRoles: ['Hardware Systems Engineer', 'PCB Layout Specialist', 'Power Delivery Engineer'],
        locations: ['Bangalore', 'Cupertino', 'Austin', 'Munich'],
        hiringRounds: ['Rigorous Screening Assessment', 'Technical 1 (Analog circuits, RLC, Transients)', 'Technical 2 (PCB high speed layout, SI/PI)', 'Executive Director Round'],
        interviewTips: 'Expect questions on ground bounce, via inductance, differential pair return current paths, and step-response of RLC circuits.',
        website: 'https://apple.com/careers'
      },
      {
        name: 'Texas Instruments (Hardware Systems)',
        domain: 'hardware-pcb-design',
        logoText: 'TI',
        fresherSalary: '₹14 - 22 LPA ($100k - $125k)',
        experiencedSalary: '₹28 - 55 LPA ($145k - $220k)',
        hiringRoles: ['Applications Hardware Engineer', 'Evaluation Module (EVM) Board Designer', 'Reference Design Engineer'],
        locations: ['Bangalore', 'Dallas', 'Freising'],
        hiringRounds: ['Online Test', 'Technical Round 1 (Schematic & Op-amps & Power)', 'Technical Round 2 (Layout & Board Bring-up)', 'HR'],
        interviewTips: 'Master buck converter layout rules: minimizing high di/dt loops and isolating sensitive feedback traces from SW nodes.',
        website: 'https://careers.ti.com'
      },
      {
        name: 'Collins Aerospace / Raytheon',
        domain: 'hardware-pcb-design',
        logoText: 'RTX',
        fresherSalary: '₹8 - 16 LPA ($80k - $105k)',
        experiencedSalary: '₹20 - 45 LPA ($130k - $190k)',
        hiringRoles: ['Avionics Hardware Engineer', 'PCB Design Engineer', 'DO-254 Hardware Compliance Specialist'],
        locations: ['Bangalore', 'Hyderabad', 'Cedar Rapids', 'Toulouse'],
        hiringRounds: ['Aptitude & Electronics Written Test', 'Core Hardware & Reliability Round', 'EMI/EMC & Environmental Testing Round', 'HR'],
        interviewTips: 'Emphasize high reliability, thermal relief, vibration tolerance, and avionics safety standards.',
        website: 'https://careers.rtx.com'
      }
    ],
    featuredCourseId: 'course-pcb-design-kicad'
  },
  {
    id: 'signal-processing',
    title: 'Signal Processing',
    symbol: '〰️ DSP',
    badgeText: 'Algorithms & Edge AI',
    shortDescription: 'Design digital filters, speech recognition, computer vision, radar signal processing, and real-time DSP pipelines.',
    overview: 'Signal Processing is the mathematical heartbeat of ECE. Engineers convert physical phenomena into digital data streams and apply algorithms for noise reduction, spectral analysis, biomedical ECG/EEG diagnosis, radar beamforming, audio synthesis, and real-time machine vision.',
    marketOutlook: 'Surging across audio tech (ANC earbuds), autonomous vehicle radar/lidar, medical imaging, and defense surveillance.',
    tags: ['DSP', 'MATLAB', 'Python', 'FFT', 'Digital Filters', 'Computer Vision', 'Audio Processing', 'Radar'],
    subRoles: [
      {
        title: 'DSP Engineer',
        description: 'Implements real-time digital filtering, FFT spectral analysis, and audio algorithms on dedicated DSP chips or FPGAs.',
        level: 'Entry',
        avgFresherSalary: '₹8 - 16 LPA ($80k - $105k)',
        avgExpSalary: '₹20 - 45 LPA ($130k - $190k)',
        keySkills: ['Fixed-Point Math', 'FIR/IIR Filters', 'TI C6000 / SHARC DSP', 'FFT/STFT', 'C/C++']
      },
      {
        title: 'Audio Algorithm Developer',
        description: 'Builds Active Noise Cancellation (ANC), acoustic echo cancellation (AEC), and 3D spatial audio algorithms for headsets.',
        level: 'Mid',
        avgFresherSalary: '₹9 - 18 LPA ($85k - $115k)',
        avgExpSalary: '₹22 - 48 LPA ($140k - $210k)',
        keySkills: ['Adaptive Filtering (LMS)', 'Acoustics', 'MATLAB Audio Toolbox', 'JUCE C++ Framework', 'Psychoacoustics']
      },
      {
        title: 'Computer Vision & Edge AI Engineer',
        description: 'Optimizes deep neural networks and image processing pipelines for edge cameras and embedded silicon.',
        level: 'Entry',
        avgFresherSalary: '₹9 - 18 LPA ($85k - $115k)',
        avgExpSalary: '₹22 - 50 LPA ($140k - $215k)',
        keySkills: ['OpenCV', 'PyTorch / TensorRT', 'Image Filtering', 'Optical Flow', 'Object Tracking']
      },
      {
        title: 'Radar / Sonar Signal Processing Specialist',
        description: 'Processes FMCW radar chirp reflections for range-Doppler estimation, target velocity, and angular direction-of-arrival (DoA).',
        level: 'Mid',
        avgFresherSalary: '₹10 - 20 LPA ($90k - $120k)',
        avgExpSalary: '₹25 - 55 LPA ($145k - $225k)',
        keySkills: ['Range-Doppler 2D FFT', 'CFAR Detection', 'Beamforming', 'MATLAB Phased Array', 'Radar Cross Section']
      }
    ],
    skillsRequired: [
      {
        category: 'Mathematics & Theory',
        whatToLearn: 'Linear algebra, complex numbers, Z-transforms, Discrete Fourier Transform (DFT/FFT), convolution, and sampling theorem',
        importance: 'Essential',
        tools: ['MATLAB', 'SciPy Signal', 'Symbolic Math']
      },
      {
        category: 'Filter Design & Spectral Analysis',
        whatToLearn: 'Finite Impulse Response (FIR), Infinite Impulse Response (IIR), Butterworth/Chebyshev filter synthesis, and spectrograms',
        importance: 'Essential',
        tools: ['MATLAB FDAtool', 'Python scipy.signal', 'Octave']
      },
      {
        category: 'Embedded Implementation & Fixed-Point',
        whatToLearn: 'Q-format arithmetic (Q15, Q31), saturation logic, fixed-point rounding errors, and CMSIS-DSP library on ARM Cortex-M',
        importance: 'Essential',
        tools: ['ARM CMSIS-DSP', 'TI Code Composer Studio', 'C/C++ SIMD intrinsics']
      },
      {
        category: 'Computer Vision & Images',
        whatToLearn: '2D spatial convolutions, edge detection (Sobel/Canny), morphological operations, color spaces, and feature extractors',
        importance: 'Recommended',
        tools: ['OpenCV', 'Pillow', 'NumPy']
      },
      {
        category: 'Modern Deep Learning for Signals',
        whatToLearn: '1D Convolutional networks for ECG/audio classification, spectrogram transfer learning, and model quantization',
        importance: 'Recommended',
        tools: ['PyTorch', 'TensorFlow Lite', 'ONNX Runtime']
      }
    ],
    roadmapSummary: 'Linear Algebra & Calculus → Discrete-Time Signals & FFT → FIR/IIR Filter Design → Fixed-Point Embedded DSP → Audio/Vision/Radar Projects',
    roadmap: [
      {
        stepNumber: 1,
        title: 'Discrete-Time Signals & The Nyquist Theorem',
        duration: '4-5 Weeks',
        description: 'Understand sampling, aliasing, quantization noise, discrete convolution, and frequency domain representation.',
        keyTopics: ['Nyquist-Shannon sampling rate', 'Aliasing and anti-aliasing filters', 'Linear time-invariant (LTI) systems', 'Discrete convolution'],
        recommendedPractice: 'Simulate signal reconstruction from samples and observe the aliasing spectrum when undersampled.'
      },
      {
        stepNumber: 2,
        title: 'Fourier Transform & Fast Fourier Transform (FFT)',
        duration: '4-5 Weeks',
        description: 'Master the discrete Fourier transform and how the Cooley-Tukey FFT algorithm computes N-point transforms in O(N log N) time.',
        keyTopics: ['DFT mathematical derivation', 'Cooley-Tukey radix-2 FFT', 'Windowing functions (Hanning, Hamming, Blackman)', 'Spectral leakage'],
        recommendedPractice: 'Implement a radix-2 Decimation-In-Time FFT algorithm from scratch in C or Python and verify against numpy.fft.'
      },
      {
        stepNumber: 3,
        title: 'Digital Filter Design (FIR & IIR)',
        duration: '4-6 Weeks',
        description: 'Design low-pass, high-pass, and bandpass filters. Analyze stability using pole-zero plots in the Z-plane and evaluate phase linearity.',
        keyTopics: ['Z-Transform and ROC', 'FIR window method and Parks-McClellan', 'Bilinear transform for IIR (Butterworth/Chebyshev)', 'Group delay & linear phase'],
        recommendedPractice: 'Design an 8-band audio equalizer with adjustable gain sliders in Python or MATLAB.'
      },
      {
        stepNumber: 4,
        title: 'Embedded DSP & ARM CMSIS-DSP Optimization',
        duration: '4-5 Weeks',
        description: 'Port mathematical DSP algorithms to physical microcontrollers using fixed-point Q15 math and hardware SIMD instructions.',
        keyTopics: ['Q-number format (Q1.15 and Q1.31)', 'Fixed-point multiplication overflow', 'ARM Cortex-M4 DSP instructions', 'CMSIS-DSP library functions'],
        recommendedPractice: 'Run a live 512-point FFT on audio ADC samples on an STM32 board and render a real-time OLED spectrum visualizer.'
      },
      {
        stepNumber: 5,
        title: 'Applied Domain: Audio, Vision, or Radar Processing',
        duration: '5-6 Weeks',
        description: 'Specialize in your target sector: acoustic noise cancellation, image processing with OpenCV, or FMCW radar signal analysis.',
        keyTopics: ['LMS Adaptive Noise Cancelling', '2D Convolution & Sobel gradients', 'FMCW Radar Range-Doppler 2D FFT', 'Doppler velocity calculation'],
        recommendedPractice: 'Process raw FMCW radar IQ data to track human walking speed and range in real time.'
      }
    ],
    projectIdeas: [
      {
        title: 'Real-Time Active Noise-Cancelling (ANC) Audio Filter',
        difficulty: 'Advanced',
        summary: 'Adaptive Least-Mean-Squares (LMS) filter running on ARM Cortex-M4 DSP sampling background ambient noise and outputting anti-noise audio.',
        componentsOrTools: ['STM32F4 Discovery', 'Audio DAC/ADC codec', 'CMSIS-DSP', 'C/C++'],
        learningOutcome: 'Adaptive filtering algorithms, circular buffers, real-time audio latency reduction (<10ms), and LMS convergence.'
      },
      {
        title: 'FMCW Radar Target Detection & Velocity Tracker',
        difficulty: 'Advanced',
        summary: 'Simulated 77 GHz automotive radar pipeline processing IQ chirp data with 2D FFT to generate Range-Doppler heatmaps and CFAR target detection.',
        componentsOrTools: ['MATLAB / Python', 'Simulated FMCW radar raw data', 'CFAR threshold algorithms'],
        learningOutcome: '2D FFT processing, beat frequency extraction, Doppler velocity shift, and CFAR false-alarm regulation.'
      },
      {
        title: 'Biomedical ECG Real-Time QRS Peak Detector',
        difficulty: 'Intermediate',
        summary: 'Digital filtering pipeline implementing the Pan-Tompkins algorithm on raw ECG signals to filter 50/60Hz powerline hum and detect heart rate.',
        componentsOrTools: ['Python / C', 'PhysioNet MIT-BIH Arrhythmia Database', 'Bandpass & Derivative Filters'],
        learningOutcome: 'Digital filter cascading, derivative operations, dynamic squaring and moving-window integration.'
      }
    ],
    hiringCompanies: [
      {
        name: 'Analog Devices (ADI)',
        domain: 'signal-processing',
        logoText: 'ADI',
        fresherSalary: '₹12 - 20 LPA ($90k - $120k)',
        experiencedSalary: '₹25 - 55 LPA ($145k - $225k)',
        hiringRoles: ['DSP Applications Engineer', 'Audio Algorithm Developer', 'Radar Systems Specialist'],
        locations: ['Bangalore', 'Wilmington (MA)', 'Limerick', 'Munich'],
        hiringRounds: ['Online Test on Signals & C', 'Technical Round 1 (FFT, Sampling, Filters, Z-Transform)', 'Technical Round 2 (C Coding & DSP Architecture)', 'HR'],
        interviewTips: 'Be ready to derive the DFT formula, explain the effect of zero-padding on frequency resolution, and solve pole-zero placement questions.',
        website: 'https://analog.com/careers'
      },
      {
        name: 'Dolby Laboratories',
        domain: 'signal-processing',
        logoText: 'DLB',
        fresherSalary: '₹12 - 22 LPA ($90k - $125k)',
        experiencedSalary: '₹26 - 60 LPA ($150k - $240k)',
        hiringRoles: ['Audio Research Engineer', 'DSP Software Engineer', 'Speech Processing Specialist'],
        locations: ['Bangalore', 'San Francisco', 'Sydney'],
        hiringRounds: ['Coding & Signal Processing Screening', 'Technical 1 (Acoustics, Filter Banks, Psychoacoustics)', 'Technical 2 (C++ Performance & Memory)', 'Managerial'],
        interviewTips: 'Deep knowledge of psychoacoustics, masking thresholds, HRTF (Head-Related Transfer Functions), and efficient C++ audio callbacks.',
        website: 'https://dolby.com/careers'
      },
      {
        name: 'Texas Instruments (Kilby DSP)',
        domain: 'signal-processing',
        logoText: 'TI',
        fresherSalary: '₹14 - 22 LPA ($100k - $125k)',
        experiencedSalary: '₹28 - 55 LPA ($145k - $220k)',
        hiringRoles: ['Embedded DSP Developer', 'Medical Imaging Algorithm Engineer', 'Radar Signal Processing Engineer'],
        locations: ['Bangalore', 'Dallas', 'Freising'],
        hiringRounds: ['Written Assessment', 'Core DSP Theory Interview', 'Software & Implementation Interview', 'HR'],
        interviewTips: 'Strong focus on fixed-point arithmetic vs floating point, quantization noise, and SIMD optimization.',
        website: 'https://careers.ti.com'
      }
    ],
    featuredCourseId: 'course-dsp-filter-design'
  },
  {
    id: 'robotics-automation',
    title: 'Robotics & Automation',
    symbol: '🤖 Bot',
    badgeText: 'Control Systems & Robotics',
    shortDescription: 'Build autonomous robots, industrial PLC automation, PID motor controllers, and ROS 2 navigation pipelines.',
    overview: 'Robotics & Automation integrates classical control theory with modern computer science and mechatronics. Engineers design closed-loop feedback controllers (PID, State-Space), configure industrial PLCs and SCADA networks, model robot kinematics, and program autonomous mobile robots using ROS 2 (Robot Operating System) and Gazebo.',
    marketOutlook: 'Rapid acceleration in factory automation, warehouse logistics (AMRs), humanoid robotics research, and robotic surgery.',
    tags: ['PID Control', 'ROS 2', 'PLC & SCADA', 'Robotics', 'MATLAB/Simulink', 'Gazebo', 'Kinematics', 'Automation'],
    subRoles: [
      {
        title: 'Robotics Software Engineer',
        description: 'Implements motion planning, SLAM navigation, perception, and state estimation on autonomous robots using C++ and ROS 2.',
        level: 'Entry',
        avgFresherSalary: '₹7 - 16 LPA ($80k - $105k)',
        avgExpSalary: '₹18 - 42 LPA ($125k - $185k)',
        keySkills: ['ROS 2 / C++', 'SLAM & Navigation (Nav2)', 'Gazebo Simulation', 'Linux', 'Kinematics']
      },
      {
        title: 'Control Systems Engineer',
        description: 'Designs feedback controllers, tunes PID/LQR loops, analyzes system stability with Bode/Nyquist plots, and simulates dynamic models.',
        level: 'Entry',
        avgFresherSalary: '₹7 - 15 LPA ($75k - $100k)',
        avgExpSalary: '₹18 - 38 LPA ($120k - $175k)',
        keySkills: ['PID Controllers', 'Bode/Nyquist Stability', 'MATLAB & Simulink', 'State-Space Modeling', 'Motor Control']
      },
      {
        title: 'Industrial Automation & PLC Engineer',
        description: 'Programs Programmable Logic Controllers (PLCs) using Ladder Logic and Structured Text, and designs industrial SCADA & HMI interfaces.',
        level: 'Entry',
        avgFresherSalary: '₹5 - 12 LPA ($65k - $90k)',
        avgExpSalary: '₹14 - 32 LPA ($105k - $155k)',
        keySkills: ['PLC (Siemens / Allen Bradley)', 'Ladder Logic / Structured Text', 'HMI / SCADA Basics', 'Modbus / Profinet', 'Safety Relays']
      },
      {
        title: 'Mechatronics / Motor Drive Engineer',
        description: 'Designs motor drives (BLDC, Stepper, Servo), encoder feedback reading, current sensing, and power inverter electronics.',
        level: 'Mid',
        avgFresherSalary: '₹8 - 16 LPA ($80k - $105k)',
        avgExpSalary: '₹20 - 42 LPA ($130k - $185k)',
        keySkills: ['BLDC FOC Control', 'Optical Encoders', 'H-Bridge / Inverters', 'Current Sensing', 'Microcontrollers']
      }
    ],
    skillsRequired: [
      {
        category: 'Control',
        whatToLearn: 'Feedback systems, PID controllers, stability (Routh-Hurwitz, Bode plots, Nyquist criterion, root locus), and state-space representation',
        importance: 'Essential',
        tools: ['MATLAB/Simulink', 'Python Control Systems Library', 'Simscape']
      },
      {
        category: 'Automation',
        whatToLearn: 'PLC architecture, ladder logic, Structured Text (IEC 61131-3), HMI design, and SCADA basics',
        importance: 'Essential',
        tools: ['Siemens TIA Portal', 'Rockwell RSLogix', 'Factory I/O', 'Ignition SCADA']
      },
      {
        category: 'Robotics',
        whatToLearn: 'Forward & inverse kinematics, coordinate transformation matrices (DH parameters), trajectory generation, and motion planning',
        importance: 'Essential',
        tools: ['ROS 2 Humble/Iron', 'Gazebo Fortress/Harmonic', 'RViz', 'MoveIt 2']
      },
      {
        category: 'Programming & Tools',
        whatToLearn: 'Modern C++ (C++17/20), Python, Linux Ubuntu, Git, and hardware-in-the-loop simulation',
        importance: 'Essential',
        tools: ['C++', 'Python', 'Linux Bash', 'Docker for Robotics']
      },
      {
        category: 'Hardware & Motors',
        whatToLearn: 'Sensors (LiDAR, ultrasonic, IMU, wheel encoders) and actuators (BLDC, Steppers, Servos, pneumatic valves)',
        importance: 'Recommended',
        tools: ['2D LiDAR scanners', 'Quadrature encoders', 'BLDC motor dynamometers']
      }
    ],
    roadmapSummary: 'Electronics → C/C++ → Sensors and motors → Control systems → Robotics tools (ROS 2/Gazebo) → Automation projects',
    roadmap: [
      {
        stepNumber: 1,
        title: 'Electronics & Actuator Interfacing',
        duration: '4-5 Weeks',
        description: 'Master driving actuators safely: DC motors with H-Bridges, stepper motor micro-stepping, PWM servos, and optical encoder feedback.',
        keyTopics: ['H-Bridge MOSFET drivers (L298N / DRV8833)', 'Back-EMF and flyback diodes', 'Quadrature encoder decoding via hardware timers', 'Servo PWM signals'],
        recommendedPractice: 'Build a dual DC-motor drive circuit with encoder feedback to measure accurate RPM under varying loads.'
      },
      {
        stepNumber: 2,
        title: 'C/C++ & Embedded Software for Motion',
        duration: '4-5 Weeks',
        description: 'Write robust object-oriented C++ on microcontrollers to manage hardware peripherals, state transitions, and timing constraints.',
        keyTopics: ['Modern C++ classes for actuators and sensors', 'Timer interrupts for periodic loop timing', 'Ring buffers for serial command parsing'],
        recommendedPractice: 'Write a C++ motor class handling acceleration ramps, deceleration limits, and emergency e-stops.'
      },
      {
        stepNumber: 3,
        title: 'Control Systems & PID Implementation',
        duration: '5-6 Weeks',
        description: 'Understand feedback control theory. Model systems in transfer functions, analyze stability on Bode plots, and code digital PID loops.',
        keyTopics: ['Proportional, Integral, Derivative action', 'Derivative kick mitigation', 'Integral anti-windup clamping', 'Ziegler-Nichols & manual tuning'],
        recommendedPractice: 'Implement a discrete PID speed controller on a DC motor and plot the step response with zero steady-state error.'
      },
      {
        stepNumber: 4,
        title: 'Industrial Automation (PLC & SCADA Basics)',
        duration: '4-5 Weeks',
        description: 'Learn the industrial standard for manufacturing: PLC ladder logic, timers, counters, interlocking circuits, and HMI display design.',
        keyTopics: ['IEC 61131-3 Ladder Diagram (LD) & Structured Text (ST)', 'PLC scan cycle', 'Interlocking and safety circuits', 'SCADA telemetry'],
        recommendedPractice: 'Simulate a multi-stage industrial conveyor sorting system with sensor inputs and pneumatic pushers in Factory I/O.'
      },
      {
        stepNumber: 5,
        title: 'Robotics Frameworks: ROS 2 & Gazebo Simulation',
        duration: '6-8 Weeks',
        description: 'Learn industry robotics software: ROS 2 nodes, topics, services, actions, URDF robot modeling, Gazebo physics, and Nav2 SLAM.',
        keyTopics: ['ROS 2 architecture (Nodes, Topics, Actions)', 'URDF and TF2 coordinate transforms', 'Gazebo simulation environments', 'SLAM & Nav2 path planning'],
        recommendedPractice: 'Build a differential drive mobile robot in Gazebo, map an unknown virtual room using LiDAR SLAM, and command autonomous waypoint navigation.'
      }
    ],
    projectIdeas: [
      {
        title: 'High-Precision PID Motor Speed & Position Controller',
        difficulty: 'Intermediate',
        summary: 'Digital closed-loop PID controller running on STM32 / Arduino maintaining exact wheel RPM and position under suddenly applied mechanical loads.',
        componentsOrTools: ['DC Motor with Optical Encoder', 'H-Bridge Driver', 'Microcontroller', 'Serial Plotter / Python GUI'],
        learningOutcome: 'Discrete PID algorithm, anti-windup integrator clamping, encoder interrupt decoding, and step response tuning.'
      },
      {
        title: 'Autonomous Mobile Robot (AMR) with ROS 2 & LiDAR SLAM',
        difficulty: 'Advanced',
        summary: 'Two-wheeled differential mobile robot featuring a 2D LiDAR scanner mapping unknown environments and autonomously navigating obstacles using ROS 2 Nav2.',
        componentsOrTools: ['Raspberry Pi 4 / Jetson', 'RPLiDAR A1', 'ROS 2 Humble', 'SLAM Toolbox', 'Differential Base'],
        learningOutcome: 'ROS 2 node architecture, odometry fusion, TF coordinate transforms, costmaps, and obstacle avoidance.'
      },
      {
        title: 'High-Speed Line-Following & Obstacle-Avoiding Robot',
        difficulty: 'Beginner',
        summary: 'Classic competitive robotics platform utilizing an infrared sensor array, PID tracking algorithm, and ultrasonic sensors to navigate complex tracks.',
        componentsOrTools: ['8-Channel IR Sensor Array', 'Microcontroller', 'High-RPM Coreless DC Motors', 'Ultrasonic Sensor'],
        learningOutcome: 'Sensor calibration, weighted average position calculation, proportional-derivative steering, and state machine transitions.'
      }
    ],
    hiringCompanies: [
      {
        name: 'ABB Robotics & Automation',
        domain: 'robotics-automation',
        logoText: 'ABB',
        fresherSalary: '₹7 - 15 LPA ($75k - $100k)',
        experiencedSalary: '₹18 - 40 LPA ($120k - $180k)',
        hiringRoles: ['Robotics Applications Engineer', 'Automation Systems Specialist', 'Motion Control Developer'],
        locations: ['Bangalore', 'Zurich', 'Västerås', 'Auburn Hills'],
        hiringRounds: ['Online Aptitude & Control Systems Test', 'Technical Round 1 (Control Theory, Motors, PID)', 'Technical Round 2 (PLC & Industrial Protocols)', 'Managerial'],
        interviewTips: 'Expect questions on root locus, Nyquist stability, PID anti-windup logic, and industrial safety interlocks.',
        website: 'https://careers.abb'
      },
      {
        name: 'Siemens Automation',
        domain: 'robotics-automation',
        logoText: 'SIEM',
        fresherSalary: '₹8 - 15 LPA ($75k - $100k)',
        experiencedSalary: '₹19 - 42 LPA ($125k - $185k)',
        hiringRoles: ['PLC Systems Engineer', 'Industrial Drive Specialist', 'SCADA & IoT Engineer'],
        locations: ['Bangalore', 'Pune', 'Nuremberg', 'Atlanta'],
        hiringRounds: ['Aptitude & Technical Screening', 'Core Automation & Ladder Logic Interview', 'Drive & Motor Sizing Interview', 'HR'],
        interviewTips: 'Master Siemens TIA Portal concepts, Profinet vs Profibus, and motor inverter parameter tuning.',
        website: 'https://siemens.com/careers'
      },
      {
        name: 'Amazon Robotics',
        domain: 'robotics-automation',
        logoText: 'AMZN',
        fresherSalary: '₹18 - 30 LPA ($115k - $150k)',
        experiencedSalary: '₹38 - 80 LPA ($175k - $270k)',
        hiringRoles: ['Robotics Software Engineer', 'Hardware Test Engineer', 'Autonomous Mobile Robot Developer'],
        locations: ['Bangalore', 'Boston (North Reading)', 'Seattle', 'Berlin'],
        hiringRounds: ['Online Assessment (Data Structures & C++)', 'Technical 1 (C++ & Concurrency)', 'Technical 2 (Robotics Kinematics & ROS)', 'Technical 3 (System Design)', 'Bar Raiser'],
        interviewTips: 'Strong foundation in C++17, real-time thread safety, coordinate frames (transform matrices), and path planning algorithms (A*, Dijkstra).',
        website: 'https://amazon.jobs'
      }
    ],
    featuredCourseId: 'course-ros2-robotics'
  },
  {
    id: 'automotive-ev',
    title: 'Automotive & EV',
    symbol: '⚡🚗 EV',
    badgeText: 'Electric Vehicles & Mobility',
    shortDescription: 'Engineer Electric Vehicle powertrains, Battery Management Systems (BMS), AUTOSAR firmware, and ADAS sensors.',
    overview: 'The Automotive & Electric Vehicle revolution is fundamentally driven by ECE. From Battery Management Systems (BMS) with high-voltage safety and cell balancing to high-efficiency Field Oriented Control (FOC) inverter drives, CAN-FD / Ethernet vehicle networks, and ISO 26262 functional safety, ECE engineers build the brain and nervous system of next-generation mobility.',
    marketOutlook: 'Rapid electric transition with soaring demand at EV OEMs (Tesla, Rivian, Ather, Ola), Tier-1 automotive suppliers, and battery gigafactories.',
    tags: ['EV Powertrain', 'BMS', 'AUTOSAR', 'CAN Bus', 'FOC Motor Control', 'ISO 26262', 'ADAS'],
    subRoles: [
      {
        title: 'Battery Management System (BMS) Engineer',
        description: 'Develops algorithms for State-of-Charge (SoC), State-of-Health (SoH), passive/active cell balancing, and high-voltage contactor safety.',
        level: 'Entry',
        avgFresherSalary: '₹7 - 16 LPA ($80k - $105k)',
        avgExpSalary: '₹19 - 44 LPA ($125k - $190k)',
        keySkills: ['Cell Balancing', 'SoC/SoH Estimation (Kalman Filter)', 'TI/ADI BMS ICs', 'Thermal Management', 'High-Voltage Safety']
      },
      {
        title: 'Automotive Embedded / AUTOSAR Developer',
        description: 'Implements Classic/Adaptive AUTOSAR software components, Basic Software (BSW), and microcontroller abstraction layers (MCAL).',
        level: 'Entry',
        avgFresherSalary: '₹8 - 17 LPA ($80k - $110k)',
        avgExpSalary: '₹20 - 45 LPA ($130k - $195k)',
        keySkills: ['AUTOSAR Classic/Adaptive', 'Vector DaVinci', 'CAN/LIN/UDS Diagnostics', 'MISRA C', 'Embedded C']
      },
      {
        title: 'EV Motor Drive & Inverter Engineer',
        description: 'Develops Field Oriented Control (FOC) algorithms, space vector PWM (SVPWM), and gate drive circuits for permanent magnet synchronous motors.',
        level: 'Mid',
        avgFresherSalary: '₹9 - 18 LPA ($85k - $115k)',
        avgExpSalary: '₹22 - 50 LPA ($135k - $210k)',
        keySkills: ['Field Oriented Control (FOC)', 'SVPWM', 'SiC / GaN Inverters', 'Current Sensing', 'MATLAB Simscape']
      },
      {
        title: 'ADAS & Autonomous Sensors Engineer',
        description: 'Integrates radar, ultrasonic parking sensors, LiDAR, and camera vision feeds into vehicle Advanced Driver Assistance Systems (ADAS).',
        level: 'Mid',
        avgFresherSalary: '₹9 - 19 LPA ($85k - $120k)',
        avgExpSalary: '₹24 - 52 LPA ($140k - $215k)',
        keySkills: ['Automotive Ethernet', 'CAN-FD', 'Computer Vision', 'Sensor Fusion', 'ISO 26262 (ASIL D)']
      }
    ],
    skillsRequired: [
      {
        category: 'EV Architecture & Powertrain',
        whatToLearn: 'High-voltage EV architecture, battery pack configurations (series/parallel), DC-DC converters, on-board chargers (OBC), and regenerative braking',
        importance: 'Essential',
        tools: ['MATLAB Simscape Electrical', 'PSpice', 'Power Analyzers']
      },
      {
        category: 'BMS Algorithms & Physics',
        whatToLearn: 'Lithium-ion chemistry, thermal runaway prevention, Coulomb counting, Extended Kalman Filters for SoC, and cell balancing circuits',
        importance: 'Essential',
        tools: ['ADI LTC6811 / TI BQ76952 BMS ICs', 'Battery Cyclers', 'Temperature Chambers']
      },
      {
        category: 'Vehicle Networks & Protocols',
        whatToLearn: 'CAN 2.0B, CAN-FD, LIN bus, Automotive Ethernet (100BASE-T1), and Unified Diagnostic Services (UDS / ISO 14229)',
        importance: 'Essential',
        tools: ['Vector CANoe / CANalyzer', 'PEAK PCAN-USB', 'Wireshark']
      },
      {
        category: 'Standards & Functional Safety',
        whatToLearn: 'ISO 26262 functional safety, ASIL ratings (A, B, C, D), failure mode effects analysis (FMEA), and MISRA C coding standards',
        importance: 'Essential',
        tools: ['MISRA C Checkers', 'LDRA / Polyspace', 'Requirements tools (Jira/DOORS)']
      },
      {
        category: 'Motor Control & Inverters',
        whatToLearn: 'Clark & Park transforms, PI current regulators, SVPWM modulation, and Silicon Carbide (SiC) MOSFET switching',
        importance: 'Recommended',
        tools: ['TI C2000 Motor Control SDK', 'Hall effect sensors', 'Resolver to digital converters']
      }
    ],
    roadmapSummary: 'Electrical Drives & Inverters → BMS Algorithms & Cell Balancing → CAN/LIN Vehicle Networks → AUTOSAR & ISO 26262 → EV Capstone Projects',
    roadmap: [
      {
        stepNumber: 1,
        title: 'Lithium Battery Fundamentals & Battery Chemistry',
        duration: '4-5 Weeks',
        description: 'Understand battery cell characteristics: NMC vs LFP chemistry, open-circuit voltage curves, internal resistance, and safety limits.',
        keyTopics: ['Cell voltage, capacity (Ah), and energy (Wh)', 'C-rate and temperature dependency', 'Thermal runaway thresholds', 'Passive vs Active cell balancing'],
        recommendedPractice: 'Plot real discharge curves of an 18650 cell under 0.5C, 1C, and 2C loads and compute internal resistance.'
      },
      {
        stepNumber: 2,
        title: 'BMS Hardware Design & State Estimation (SoC/SoH)',
        duration: '5-6 Weeks',
        description: 'Design hardware interfaces with dedicated BMS monitor ICs. Implement Coulomb counting and Kalman filtering algorithms for battery percentage.',
        keyTopics: ['AFE (Analog Front-End) ICs', 'Coulomb counting with current shunts', 'Extended Kalman Filter (EKF) SoC estimation', 'Contactor pre-charge circuits'],
        recommendedPractice: 'Build a 3S or 4S battery management circuit with an AFE chip measuring per-cell voltages to 1 mV accuracy.'
      },
      {
        stepNumber: 3,
        title: 'Automotive Communication Networks (CAN, CAN-FD, LIN)',
        duration: '4-5 Weeks',
        description: 'Master in-vehicle communication. Configure CAN transceivers, define DBC database files, analyze message arbitration, and handle bus-off errors.',
        keyTopics: ['CAN differential voltage signaling', 'DBC files and message decoding', 'CAN-FD high data rate mode', 'UDS (ISO 14229) diagnostics'],
        recommendedPractice: 'Connect two microcontrollers via CAN transceivers and broadcast battery telemetry packets matching a custom DBC file.'
      },
      {
        stepNumber: 4,
        title: 'Motor Drives & Field Oriented Control (FOC)',
        duration: '5-6 Weeks',
        description: 'Drive high-efficiency brushless motors. Learn Clark and Park transformations to decouple magnetic flux and torque in real time.',
        keyTopics: ['BLDC vs PMSM motors', 'Clark & Park transforms (abc to dq frame)', 'Space Vector PWM (SVPWM)', 'Sensored vs sensorless angle estimation'],
        recommendedPractice: 'Simulate a complete 3-phase PMSM drive with FOC current loops in MATLAB/Simulink or deploy on a TI C2000 launchpad.'
      },
      {
        stepNumber: 5,
        title: 'AUTOSAR Architecture & ISO 26262 Safety',
        duration: '5-6 Weeks',
        description: 'Understand how global automotive OEMs structure ECU software: Layered AUTOSAR architecture, RTE, and functional safety compliance.',
        keyTopics: ['AUTOSAR Classic (BSW, RTE, SWC)', 'ISO 26262 ASIL hazard analysis', 'MISRA-C strict coding rules', 'Hardware-in-the-Loop (HIL) testing'],
        recommendedPractice: 'Run static analysis (Cppcheck / Polyspace) on automotive C code and eliminate all MISRA-C guideline violations.'
      }
    ],
    projectIdeas: [
      {
        title: 'Smart 4S LiFePO4 BMS with CAN Telemetry & Balancing',
        difficulty: 'Advanced',
        summary: 'Complete battery management system with per-cell overvoltage/undervoltage cutoff, passive bleed balancing, shunt current measurement, and CAN bus telemetry.',
        componentsOrTools: ['BQ76920 / LTC6811 AFE', 'STM32 MCU', 'MCP2551 CAN', 'Current Shunt', 'Thermal Sensors'],
        learningOutcome: 'AFE I2C/SPI communication, cell balancing logic, Coulomb counting, and ISO safety shutdown mechanisms.'
      },
      {
        title: 'Field Oriented Control (FOC) BLDC Motor Inverter',
        difficulty: 'Advanced',
        summary: '3-phase inverter driving a 250W brushless motor with Clark/Park transforms, encoder feedback, and closed-loop speed control for an electric scooter.',
        componentsOrTools: ['TI C2000 / STM32F303', '3-Phase Gate Driver', 'Shunt Resistors', 'SVPWM Algorithm'],
        learningOutcome: 'Space Vector PWM calculation, current sensing ADC calibration, and dq-axis PI current loop tuning.'
      },
      {
        title: 'Automotive CAN Bus ECU Dashboard & Diagnostic Logger',
        difficulty: 'Intermediate',
        summary: 'Hardware logger sniffing vehicle OBD-II / CAN bus messages, parsing vehicle speed/RPM/coolant temp, and showing telemetry on a dashboard.',
        componentsOrTools: ['ESP32 / Teensy', 'CAN Transceiver', 'OBD-II Cable', 'OLED Display / SD Card'],
        learningOutcome: 'OBD-II PID request/response protocol, CAN bus filtering (masks & filters), and baud-rate auto-detection.'
      }
    ],
    hiringCompanies: [
      {
        name: 'Tesla',
        domain: 'automotive-ev',
        logoText: 'TSLA',
        fresherSalary: '₹18 - 32 LPA ($110k - $145k)',
        experiencedSalary: '₹38 - 85 LPA ($170k - $280k)',
        hiringRoles: ['Low-Voltage Systems Engineer', 'BMS Firmware Engineer', 'Powertrain Inverter Designer'],
        locations: ['Palo Alto', 'Austin', 'Berlin', 'Shanghai'],
        hiringRounds: ['Technical Screen & Coding', 'Technical Round 1 (Power Electronics, BMS Physics)', 'Technical Round 2 (Embedded C & RTOS)', 'Presentation to Engineering Team'],
        interviewTips: 'Deep understanding of battery safety, contactor sequencing, MOSFET thermal dissipation, and write clean bare-metal C.',
        website: 'https://tesla.com/careers'
      },
      {
        name: 'Ather Energy',
        domain: 'automotive-ev',
        logoText: 'ATHER',
        fresherSalary: '₹8 - 16 LPA ($80k - $105k)',
        experiencedSalary: '₹20 - 45 LPA ($130k - $190k)',
        hiringRoles: ['BMS Firmware Developer', 'Vehicle Integration Engineer', 'Motor Control Specialist'],
        locations: ['Bangalore', 'Hosur'],
        hiringRounds: ['Online Technical Test', 'Core Electrical & Embedded Round', 'Powertrain System Architecture Interview', 'HR'],
        interviewTips: 'Focus on thermal management in tropical conditions, CAN bus arbitration, and Coulomb counting drift correction.',
        website: 'https://atherenergy.com/careers'
      },
      {
        name: 'Continental Automotive',
        domain: 'automotive-ev',
        logoText: 'CONTI',
        fresherSalary: '₹7 - 14 LPA ($75k - $95k)',
        experiencedSalary: '₹18 - 38 LPA ($120k - $175k)',
        hiringRoles: ['AUTOSAR Software Engineer', 'ADAS Radar Calibration Specialist', 'ECU Test Automation Engineer'],
        locations: ['Bangalore', 'Hanover', 'Frankfurt', 'Auburn Hills'],
        hiringRounds: ['Aptitude & Technical Online Test', 'Core Automotive Technical Round', 'AUTOSAR & Safety Standards Round', 'HR'],
        interviewTips: 'Be fluent in AUTOSAR layers, CAN-FD advantages over CAN 2.0, and ISO 26262 ASIL hazard definitions.',
        website: 'https://continental.com/careers'
      }
    ],
    featuredCourseId: 'course-ev-powertrain-bms'
  }
];

export const ALL_COMPANIES: CompanyHiring[] = CAREER_FIELDS.flatMap(field => field.hiringCompanies);

export const FREE_COURSES: FreeCourse[] = [
  {
    id: 'course-embedded-c-mastery',
    domainId: 'embedded-firmware',
    title: 'Embedded C: Pointers, Memory & Bitwise Mastery',
    instructorOrSource: 'ECE Career Hub Academy • Track Stage 1',
    level: 'Beginner',
    levelTag: 'Basic',
    trackStage: 1,
    durationHours: 16,
    description: 'Master hardware-oriented C: pointer arithmetic, memory layout (Stack, Heap, BSS, Data, Text), bitwise register operations, struct padding, volatile keyword, and writing deterministic low-level routines.',
    skillsGained: ['Pointers to Registers', 'Bitwise AND/OR/XOR/Shifts', 'Volatile & Type Qualifiers', 'Memory Alignment & Structs', 'Function Pointers & Callbacks'],
    modules: [
      {
        id: 'ec1-m1',
        title: 'Module 1: Embedded Memory Architecture & C Storage Classes',
        duration: '4 Hours',
        topics: [
          'Memory segments: Flash/ROM vs SRAM',
          'Stack vs Heap vs Data vs BSS segment allocation',
          'Storage class specifiers: static, extern, auto, register',
          'Local static variables vs global scope variables'
        ],
        labOrExercise: 'Inspect a compiled C binary with GNU size/objdump and map each variable to its exact memory section.'
      },
      {
        id: 'ec1-m2',
        title: 'Module 2: Pointers, Void Pointers & Hardware Register Mapping',
        duration: '4 Hours',
        topics: [
          'Pointer arithmetic and dereferencing mechanics',
          'Pointers to fixed memory-mapped hardware addresses',
          'Pointers to pointers (double pointers) and void pointers',
          'Function pointers for state machines and hardware callbacks'
        ],
        labOrExercise: 'Implement a software callback table for button press events using an array of function pointers.'
      },
      {
        id: 'ec1-m3',
        title: 'Module 3: Bitwise Operations, Bit-Masking & Bit-Fields',
        duration: '4 Hours',
        topics: [
          'Setting, clearing, toggling, and checking individual bits',
          'Bit-masking techniques with hexadecimal constants',
          'Multi-bit field extraction and insertion without affecting adjacent bits',
          'C Struct bit-fields vs portable bitwise shift operations'
        ],
        labOrExercise: 'Write macro routines to atomically set, clear, and poll status bits in simulated 32-bit peripheral registers.'
      },
      {
        id: 'ec1-m4',
        title: 'Module 4: Type Qualifiers, Struct Alignment & Endianness',
        duration: '4 Hours',
        topics: [
          'Volatile keyword: why, when, and compiler optimization prevention',
          'Const pointers vs pointers to const data',
          'Structure padding, member alignment rules, and #pragma pack',
          'Little-endian vs Big-endian byte order conversion'
        ],
        labOrExercise: 'Pack telemetry data into a packed C struct and write an endianness-safe serialization function.'
      }
    ],
    quiz: [
      {
        question: 'Why is the "volatile" keyword strictly mandatory for hardware register pointer definitions in Embedded C?',
        options: [
          'It instructs the compiler to allocate register memory on the stack rather than in heap',
          'It informs the compiler optimizer that the register value can change asynchronously outside program control, preventing cached CPU register reads',
          'It automatically converts 8-bit registers to 32-bit registers at compile time',
          'It creates a mutex lock around the register address'
        ],
        correctIndex: 1,
        explanation: 'Hardware registers can change asynchronously due to hardware interrupts or peripheral status changes. "volatile" forces the compiler to reload from physical memory on every access.'
      },
      {
        question: 'Which C expression correctly sets Bit 7 and clears Bit 3 in a 32-bit peripheral register REG without altering other bits?',
        options: [
          'REG = (1 << 7) & ~(1 << 3);',
          'REG = (REG | (1 << 7)) & ~(1 << 3);',
          'REG ^= (1 << 7) | (1 << 3);',
          'REG = REG | 0x88;'
        ],
        correctIndex: 1,
        explanation: 'Using (REG | (1 << 7)) sets bit 7 with OR, and chaining & ~(1 << 3) clears bit 3 with an inverted mask, preserving all other bits.'
      },
      {
        question: 'What is the risk of using standard struct bit-fields (e.g. unsigned int flag:1;) for memory-mapped hardware peripheral registers?',
        options: [
          'Bit-fields can only be declared inside union blocks',
          'The C standard does not guarantee bit allocation order (LSB first vs MSB first), making it non-portable across compilers and architectures',
          'Bit-fields increase memory usage by 4x',
          'Hardware DMA controllers cannot read structs'
        ],
        correctIndex: 1,
        explanation: 'The layout of bit-fields is implementation-defined by the compiler. Professional embedded firmware uses explicit bitwise shifts and masks for portable register manipulation.'
      }
    ]
  },
  {
    id: 'course-arm-cortex-baremetal',
    domainId: 'embedded-firmware',
    title: 'ARM Cortex-M Bare-Metal Driver Development',
    instructorOrSource: 'ECE Career Hub Academy • Track Stage 2',
    level: 'Intermediate',
    levelTag: 'Intermediate',
    trackStage: 2,
    durationHours: 20,
    description: 'Learn register-level bare-metal driver development from scratch without vendor HAL libraries. Master ARM Cortex-M architecture, startup code, RCC clock trees, NVIC interrupts, Timers, and ADC.',
    skillsGained: ['ARM Cortex-M Architecture', 'Startup Assembly & Linker Scripts', 'Bare-Metal GPIO & RCC', 'NVIC Interrupt Priorities', 'Hardware Timers & PWM'],
    modules: [
      {
        id: 'ec2-m1',
        title: 'Module 1: ARM Cortex-M Core Registers & Reset Sequence',
        duration: '5 Hours',
        topics: [
          'Core registers (R0-R12, SP, LR, PC, xPSR, PRIMASK, CONTROL)',
          'Main Stack Pointer (MSP) vs Process Stack Pointer (PSP)',
          'Microcontroller power-on reset sequence',
          'Vector table structure and reset handler function'
        ],
        labOrExercise: 'Write a minimal startup assembly file (.s) initializing the stack pointer and branching to main().'
      },
      {
        id: 'ec2-m2',
        title: 'Module 2: Memory-Mapped I/O, Clock Control (RCC) & Linker Scripts',
        duration: '5 Hours',
        topics: [
          'Peripheral bus matrix: AHB, APB1, and APB2 buses',
          'Reset and Clock Control (RCC): configuring PLLs and prescalers',
          'Linker script syntax (.ld): defining FLASH and RAM memory regions',
          'Writing bare-metal GPIO driver headers with struct register pointers'
        ],
        labOrExercise: 'Configure the internal PLL to boost CPU clock from 8 MHz to 72 MHz using direct register writes.'
      },
      {
        id: 'ec2-m3',
        title: 'Module 3: Nested Vectored Interrupt Controller (NVIC)',
        duration: '5 Hours',
        topics: [
          'NVIC architecture and interrupt vector mapping',
          'Interrupt priorities, preemption priority vs sub-priority grouping',
          'Configuring External Interrupts (EXTI) and line mapping',
          'Writing deterministic Interrupt Service Routines (ISRs) and clearing pending flags'
        ],
        labOrExercise: 'Implement a debounced external push-button interrupt handler that triggers immediate state transitions.'
      },
      {
        id: 'ec2-m4',
        title: 'Module 4: Hardware Timers, PWM Generation & ADC Sampling',
        duration: '5 Hours',
        topics: [
          'Timer prescalers, auto-reload registers (ARR), and counter modes',
          'Generating variable duty-cycle PWM for motor speed and LED dimming',
          'Successive Approximation ADC architecture',
          'ADC polling mode vs interrupt-driven end-of-conversion (EOC)'
        ],
        labOrExercise: 'Build a bare-metal PWM driver generating a 25 kHz signal with smooth duty cycle ramping.'
      }
    ],
    quiz: [
      {
        question: 'During power-on reset of an ARM Cortex-M microcontroller, what does the hardware load from address 0x00000000 and 0x00000004?',
        options: [
          '0x00000000 loads the Program Counter (PC); 0x00000004 loads the stack pointer (MSP)',
          '0x00000000 loads the initial Main Stack Pointer (MSP); 0x00000004 loads the Reset Handler address (PC)',
          '0x00000000 loads the clock configuration; 0x00000004 loads the vector table count',
          '0x00000000 loads the manufacturer ID'
        ],
        correctIndex: 1,
        explanation: 'ARM Cortex-M hardware expects the initial stack pointer value at word 0 (0x00000000) and the entry point Reset Handler address at word 1 (0x00000004).'
      },
      {
        question: 'In the ARM Cortex-M NVIC, what happens if an interrupt with preemption priority 1 arrives while an interrupt with preemption priority 2 is executing?',
        options: [
          'The CPU ignores the new interrupt',
          'The new interrupt (priority 1) immediately preempts the executing interrupt (priority 2), since lower number indicates higher priority',
          'The CPU crashes with a HardFault',
          'Both interrupts execute concurrently on alternate clock cycles'
        ],
        correctIndex: 1,
        explanation: 'In ARM Cortex-M NVIC, numerically lower priority numbers represent higher priority. An interrupt with priority 1 will immediately preempt one with priority 2.'
      },
      {
        question: 'Why must peripheral clocks be enabled in the RCC register before attempting to configure GPIO pins?',
        options: [
          'To prevent memory leaks in RAM',
          'To save battery life during reset',
          'Because peripheral register blocks are clock-gated; writing to them while unclocked has no effect or generates a bus fault',
          'To initialize the bootloader UART baud rate'
        ],
        correctIndex: 2,
        explanation: 'Modern microcontrollers gate clocks to peripherals by default to save power. Without clock signals, peripheral logic and registers cannot update.'
      }
    ]
  },
  {
    id: 'course-embedded-protocols-drivers',
    domainId: 'embedded-firmware',
    title: 'Hardware Protocols: UART, SPI, I2C & CAN Bus',
    instructorOrSource: 'ECE Career Hub Academy • Track Stage 3',
    level: 'Intermediate',
    levelTag: 'Intermediate',
    trackStage: 3,
    durationHours: 18,
    description: 'Build robust device drivers for the 4 cornerstone industrial embedded communication buses. Master ring buffers, clock stretching, multi-slave SPI, CAN-FD arbitration, and DMA offloading.',
    skillsGained: ['UART Circular Ring Buffer', 'I2C Master/Slave FSM', 'SPI High-Speed DMA', 'CAN 2.0B / CAN-FD Frames', 'Logic Analyzer Packet Debugging'],
    modules: [
      {
        id: 'ec3-m1',
        title: 'Module 1: UART with Circular Ring Buffers & DMA Offloading',
        duration: '4 Hours',
        topics: [
          'UART asynchronous framing: start bit, data bits, parity, stop bits',
          'Baud rate divisor calculation and fractional oversampling',
          'Circular FIFO ring buffer implementation for non-blocking TX/RX',
          'Direct Memory Access (DMA) circular stream configuration'
        ],
        labOrExercise: 'Write an interrupt-driven UART driver with a 256-byte circular buffer and packet delimiter parsing.'
      },
      {
        id: 'ec3-m2',
        title: 'Module 2: I2C Master Driver & Clock Stretching Handling',
        duration: '4 Hours',
        topics: [
          'Open-drain output topology and pull-up resistor sizing',
          'Start, Repeated Start, 7-bit addressing, ACK/NACK handshake, Stop',
          'Handling slave clock stretching without locking up the CPU',
          'Writing an I2C device driver for a digital temperature/humidity sensor'
        ],
        labOrExercise: 'Implement a non-blocking I2C finite state machine with timeout recovery to prevent bus hangs.'
      },
      {
        id: 'ec3-m3',
        title: 'Module 3: High-Speed SPI & Multi-Slave Bus Sharing',
        duration: '5 Hours',
        topics: [
          'SPI modes: Clock Polarity (CPOL) and Clock Phase (CPHA) matrix',
          'Full-duplex master/slave communication at up to 25+ MHz',
          'Active-low chip select (/CS) management and bus contention avoidance',
          'High-speed sensor streaming to SPI Flash memory using DMA'
        ],
        labOrExercise: 'Interface an SPI color TFT display using DMA burst transfers to achieve 60 FPS update rates.'
      },
      {
        id: 'ec3-m4',
        title: 'Module 4: Industrial CAN Bus 2.0B & CAN-FD Engineering',
        duration: '5 Hours',
        topics: [
          'CAN differential signaling (CAN_H, CAN_L) and 120-ohm termination',
          'Non-destructive bitwise arbitration by identifier priority',
          'CAN frame structure: SOF, Identifier, RTR, DLC, Data, CRC, ACK',
          'CAN-FD benefits: flexible data rate switching up to 5 Mbps and 64-byte payload'
        ],
        labOrExercise: 'Configure an on-chip CAN controller with identifier filtering masks and transmit automotive sensor packets.'
      }
    ],
    quiz: [
      {
        question: 'In an I2C bus transaction, how does a slave device communicate that it cannot immediately process data from the master?',
        options: [
          'It sends an abort frame on the SDA line',
          'It holds the SCL clock line LOW (Clock Stretching) until ready',
          'It inverts the supply voltage',
          'It transmits an interrupt packet on the power line'
        ],
        correctIndex: 1,
        explanation: 'In I2C, a slave can hold SCL low after receiving a byte. The master senses this and pauses its clock until the slave releases SCL.'
      },
      {
        question: 'Which SPI Mode corresponds to Clock Polarity CPOL=0 (idle LOW) and Clock Phase CPHA=1 (data captured on 2nd clock edge)?',
        options: ['SPI Mode 0', 'SPI Mode 1', 'SPI Mode 2', 'SPI Mode 3'],
        correctIndex: 1,
        explanation: 'SPI Mode 1 corresponds to CPOL=0 (clock idles low) and CPHA=1 (data sampled on falling/second edge).'
      },
      {
        question: 'How does CAN Bus arbitration handle two nodes transmitting at the exact same instant?',
        options: [
          'Both packets collide and must be retransmitted after a random backoff',
          'Dominant bits (logic 0) overwrite recessive bits (logic 1); the node transmitting a recessive bit detects the mismatch and backs off without destroying the dominant frame',
          'The master clock decides based on round-robin priority',
          'The node with the larger payload always wins'
        ],
        correctIndex: 1,
        explanation: 'CAN uses wired-AND logic where dominant (0) overwrites recessive (1). The node with the lower numerical identifier retains priority without data corruption.'
      }
    ]
  },
  {
    id: 'course-freertos-rtos-internals',
    domainId: 'embedded-firmware',
    title: 'FreeRTOS & Real-Time Operating System Internals',
    instructorOrSource: 'ECE Career Hub Academy • Track Stage 4',
    level: 'Advanced',
    levelTag: 'Advanced',
    trackStage: 4,
    durationHours: 22,
    description: 'Transition from single super-loops to professional deterministic multi-threading. Master preemptive scheduling, task states, mutexes, semaphores, priority inversion, message queues, and memory heap models.',
    skillsGained: ['FreeRTOS Kernel Architecture', 'Preemptive Priority Scheduling', 'Mutex vs Counting Semaphore', 'Priority Inversion & Inheritance', 'Inter-Task Message Queues'],
    modules: [
      {
        id: 'ec4-m1',
        title: 'Module 1: RTOS Kernels & Task Lifecycle',
        duration: '5 Hours',
        topics: [
          'Super-loop limitations vs real-time deterministic multitasking',
          'FreeRTOS task creation (`xTaskCreate`), TCB, and stack allocation',
          'Task states: Running, Ready, Blocked, Suspended',
          'SysTick timer interrupt and context switching assembly internals'
        ],
        labOrExercise: 'Create three tasks with differing priorities and inspect context switching via logic analyzer GPIO toggling.'
      },
      {
        id: 'ec4-m2',
        title: 'Module 2: Synchronization: Mutexes, Semaphores & Critical Sections',
        duration: '6 Hours',
        topics: [
          'Binary semaphores for task-to-task signaling and ISR synchronization',
          'Counting semaphores for shared resource pool tracking',
          'Mutexes for mutual exclusion and reentrancy protection',
          'Critical sections (`taskENTER_CRITICAL`) vs disabling interrupts'
        ],
        labOrExercise: 'Synchronize an ADC conversion complete ISR with a processing task using a binary semaphore with `FromISR` API.'
      },
      {
        id: 'ec4-m3',
        title: 'Module 3: Priority Inversion, Priority Inheritance & Deadlocks',
        duration: '5 Hours',
        topics: [
          'The Classic Priority Inversion anomaly (Mars Pathfinder bug)',
          'How FreeRTOS mutex Priority Inheritance resolves unbounded priority inversion',
          'Deadlock scenarios with multiple mutexes and lock-ordering rules',
          'Software timers and the FreeRTOS Daemon Task'
        ],
        labOrExercise: 'Simulate a priority inversion scenario with three tasks and observe how priority inheritance cures starvation.'
      },
      {
        id: 'ec4-m4',
        title: 'Module 4: Inter-Task Queues, Memory Heaps & Safety Hooks',
        duration: '6 Hours',
        topics: [
          'Thread-safe message queues (`xQueueSend`, `xQueueReceive`)',
          'Queue sets for waiting on multiple queues simultaneously',
          'FreeRTOS memory managers: heap_1 through heap_5 differences',
          'Stack overflow hook (`vApplicationStackOverflowHook`) and idle task watchdog'
        ],
        labOrExercise: 'Build a production-grade multi-sensor telemetry pipeline passing data packets through thread-safe FreeRTOS queues.'
      }
    ],
    quiz: [
      {
        question: 'What is the critical distinction between a Mutex and a Binary Semaphore in FreeRTOS?',
        options: [
          'Binary semaphores can hold up to 16 items; mutexes only hold 1',
          'A Mutex includes ownership and priority inheritance to prevent priority inversion; a Semaphore is a signaling mechanism without ownership',
          'A Mutex can only be used from inside an ISR',
          'There is no difference; they are exact aliases'
        ],
        correctIndex: 1,
        explanation: 'Mutexes have ownership (only the task that takes it can release it) and support priority inheritance. Semaphores are signaling flags between tasks or interrupts.'
      },
      {
        question: 'Why should you NOT call standard FreeRTOS APIs like xQueueSend() inside an Interrupt Service Routine (ISR)?',
        options: [
          'It will corrupt the stack pointer immediately',
          'Standard APIs can cause the caller to block, which is invalid inside an ISR; you must use the non-blocking xQueueSendFromISR() variant',
          'Interrupts do not have access to FreeRTOS heap memory',
          'The C compiler will refuse to compile any function with ISR in its name'
        ],
        correctIndex: 1,
        explanation: 'An ISR cannot block or sleep. FreeRTOS provides dedicated `...FromISR()` functions that never block and take an optional `pxHigherPriorityTaskWoken` flag.'
      },
      {
        question: 'Which FreeRTOS heap implementation (heap_1 to heap_5) allows allocating and freeing memory with coalescing of adjacent free blocks, while supporting non-contiguous memory pools?',
        options: ['heap_1', 'heap_2', 'heap_4', 'heap_5'],
        correctIndex: 3,
        explanation: 'heap_5 provides the same coalescing memory allocation algorithm as heap_4, with the added capability of spanning multiple physically non-contiguous RAM regions.'
      }
    ]
  },
  {
    id: 'course-embedded-linux-bsp',
    domainId: 'embedded-firmware',
    title: 'Embedded Linux Kernel & Board Support Package (BSP)',
    instructorOrSource: 'ECE Career Hub Academy • Track Stage 5',
    level: 'Advanced',
    levelTag: 'Industry Level',
    trackStage: 5,
    durationHours: 24,
    description: 'Master high-end embedded engineering with Linux. Learn the complete boot sequence, cross-compilation toolchains, Device Tree hardware descriptions, writing custom Linux character device drivers, and Yocto Project builds.',
    skillsGained: ['U-Boot Bootloader Configuration', 'Device Tree Syntax & Overlays', 'Linux Character Device Drivers', 'Kernel Top/Bottom Half IRQs', 'Yocto Project & Buildroot'],
    modules: [
      {
        id: 'ec5-m1',
        title: 'Module 1: Embedded Linux Boot Flow & Toolchains',
        duration: '6 Hours',
        topics: [
          'Complete boot sequence: BootROM → SPL → U-Boot → Linux Kernel → init/systemd',
          'Cross-compilation toolchains: GCC, Glibc vs Musl, sysroots',
          'U-Boot commands, environment variables, and TFTP network booting',
          'Kernel image formats: zImage, uImage, and compressed fitImage'
        ],
        labOrExercise: 'Configure U-Boot to boot a minimal Linux kernel and ramdisk over TFTP and NFS.'
      },
      {
        id: 'ec5-m2',
        title: 'Module 2: Device Tree (.dts) & Hardware Description',
        duration: '6 Hours',
        topics: [
          'Why Device Tree replaced board-specific C files in ARM Linux',
          'Device Tree syntax: nodes, properties, phandles, and compatible strings',
          'Pin control (pinctrl) and pin multiplexing for peripherals',
          'Dynamic Device Tree overlays (DTO) for runtime hardware expansion'
        ],
        labOrExercise: 'Write a custom Device Tree node binding an I2C sensor to a specific bus address with interrupt pin assignment.'
      },
      {
        id: 'ec5-m3',
        title: 'Module 3: Writing Linux Kernel Character Drivers',
        duration: '6 Hours',
        topics: [
          'Kernel module structure: `module_init()`, `module_exit()`, and GPL licensing',
          'Character device registration: `alloc_chrdev_region` and `cdev_init`',
          'Implementing file operations: `open()`, `read()`, `write()`, `ioctl()`, `release()`',
          'Transferring data between user space and kernel space (`copy_to_user`, `copy_from_user`)'
        ],
        labOrExercise: 'Develop a custom character driver exposing read/write control of GPIO pins via `/dev/my_gpio` in user space.'
      },
      {
        id: 'ec5-m4',
        title: 'Module 4: Interrupts in Linux & Yocto Build System',
        duration: '6 Hours',
        topics: [
          'Interrupt handling in kernel: Top half vs Bottom half (tasklets, workqueues, threaded IRQs)',
          'Kernel locking: spinlocks vs mutexes vs RCU',
          'Introduction to Yocto Project / OpenEmbedded architecture',
          'Writing BitBake recipes (.bb) and building custom rootfs images'
        ],
        labOrExercise: 'Create a Yocto layer adding a custom device driver and an automated startup daemon to the final Linux image.'
      }
    ],
    quiz: [
      {
        question: 'Why can functions called within a Linux kernel interrupt handler (Top Half) NEVER sleep or call functions like msleep()?',
        options: [
          'Interrupts do not have access to CPU registers',
          'Top-half interrupt handlers execute outside any process context; there is no backing task structure to schedule out or resume',
          'The Linux kernel automatically turns off power to the chip if an interrupt sleeps',
          'Because flash memory requires active polling'
        ],
        correctIndex: 1,
        explanation: 'Interrupt handlers run in interrupt context with no process backing. Calling sleeping functions would cause a kernel panic (Scheduling while atomic).'
      },
      {
        question: 'What is the purpose of the "compatible" string property in a Linux Device Tree node?',
        options: [
          'It specifies the license of the Linux kernel',
          'It is used by the kernel driver model to match the hardware node with the corresponding platform driver',
          'It checks whether the CPU clock speed is fast enough',
          'It prevents unauthorized users from loading firmware'
        ],
        correctIndex: 1,
        explanation: 'The Linux kernel device driver matching mechanism queries the "compatible" string table in drivers to find the matching driver for the hardware described in Device Tree.'
      },
      {
        question: 'When writing a Linux kernel driver, why must copy_from_user() be used instead of a direct pointer dereference (e.g. *buffer)?',
        options: [
          'User space pointers may be invalid, paged out, or point to kernel space (security vulnerability); copy_from_user verifies and handles page faults safely',
          'Direct dereferencing runs 100x slower',
          'User space memory is always encrypted with AES-256',
          'ARM processors do not support 32-bit pointers in kernel mode'
        ],
        correctIndex: 0,
        explanation: 'User pointers can be maliciously crafted or reside in unmapped memory. `copy_from_user` validates address bounds and gracefully handles page faults.'
      }
    ]
  },
  {
    id: 'course-autosar-misra-c',
    domainId: 'embedded-firmware',
    title: 'Automotive Embedded: MISRA C:2012 & AUTOSAR',
    instructorOrSource: 'ECE Career Hub Academy • Track Stage 6',
    level: 'Advanced',
    levelTag: 'Industry Level',
    trackStage: 6,
    durationHours: 20,
    description: 'The pinnacle of safety-critical embedded systems for Tier-1 automotive and aerospace careers. Master MISRA C:2012 safety guidelines, Classic AUTOSAR layered architecture, MCAL, RTE, UDS diagnostics, and ISO 26262 ASIL standards.',
    skillsGained: ['MISRA C:2012 Compliance', 'Classic AUTOSAR Architecture', 'MCAL & BSW Layering', 'UDS (ISO 14229) Diagnostics', 'ISO 26262 Functional Safety'],
    modules: [
      {
        id: 'ec6-m1',
        title: 'Module 1: MISRA C:2012 Safety-Critical Coding Rules',
        duration: '5 Hours',
        topics: [
          'Why standard C is dangerous for safety-critical hardware (undefined behaviors)',
          'Mandatory, Required, and Advisory MISRA C rules',
          'Eliminating pointer casting violations and implicit conversions',
          'Static code analysis integration with Cppcheck, PC-lint, and Polyspace'
        ],
        labOrExercise: 'Refactor a legacy C codebase to achieve 100% compliance with MISRA C:2012 guidelines without regressions.'
      },
      {
        id: 'ec6-m2',
        title: 'Module 2: Layered Classic AUTOSAR Architecture',
        duration: '5 Hours',
        topics: [
          'Motivation for AUTOSAR: hardware independence and software component reusability',
          'Microcontroller Abstraction Layer (MCAL): DIO, PORT, CAN, SPI drivers',
          'Basic Software (BSW): Services (OS, Watchdog, EcuM, Memory Stack)',
          'Run-Time Environment (RTE) as the software abstraction bus'
        ],
        labOrExercise: 'Configure an AUTOSAR software component (SWC) and map its sender-receiver interfaces to the RTE.'
      },
      {
        id: 'ec6-m3',
        title: 'Module 3: In-Vehicle Network Diagnostics (UDS ISO 14229)',
        duration: '5 Hours',
        topics: [
          'Unified Diagnostic Services (UDS) request/response structure over CAN',
          'Key service identifiers: DiagnosticSessionControl (0x10), ReadDataByIdentifier (0x22)',
          'SecurityAccess (0x27) seed-key challenge mechanisms',
          'Diagnostic Trouble Codes (DTC) storage in EEPROM/Flash'
        ],
        labOrExercise: 'Build a UDS diagnostic responder in C capable of handling session transitions and returning live battery telemetry.'
      },
      {
        id: 'ec6-m4',
        title: 'Module 4: ISO 26262 Functional Safety & HIL Testing',
        duration: '5 Hours',
        topics: [
          'ISO 26262 safety lifecycle: Hazard Analysis and Risk Assessment (HARA)',
          'Automotive Safety Integrity Levels: ASIL A, B, C, and D',
          'Hardware-in-the-Loop (HIL) automated regression test benches',
          'Watchdog management strategies and safe state fail-safe transitions'
        ],
        labOrExercise: 'Design a dual-watchdog window monitor circuit and automated test script validating emergency shutdown in <10ms.'
      }
    ],
    quiz: [
      {
        question: 'Why does MISRA C:2012 strictly forbid the use of dynamic memory allocation functions (malloc, free) in safety-critical automotive systems?',
        options: [
          'Because malloc is patented by Microsoft',
          'Dynamic memory allocation can cause non-deterministic execution times, heap fragmentation, and unexpected out-of-memory crashes at runtime',
          'Microcontrollers do not have sufficient address bits to run malloc',
          'Because memory can only be allocated via assembly instructions'
        ],
        correctIndex: 1,
        explanation: 'In safety-critical systems, execution time and memory availability must be 100% deterministic. Heap fragmentation can cause allocations to fail during critical driving maneuvers.'
      },
      {
        question: 'In the Classic AUTOSAR architecture, what is the role of the Run-Time Environment (RTE)?',
        options: [
          'It acts as the silicon compiler for C code',
          'It provides a transparent abstraction middleware connecting Software Components (SWC) with each other and with the Basic Software (BSW)',
          'It replaces the microcontroller hardware oscillator',
          'It is the user interface displayed on the vehicle dashboard'
        ],
        correctIndex: 1,
        explanation: 'The RTE acts as the communication backbone in AUTOSAR. Software components communicate via RTE ports without needing to know whether the target is on the same chip or a remote ECU.'
      },
      {
        question: 'Under ISO 26262, which Automotive Safety Integrity Level represents the most stringent safety requirements with the highest risk of life-threatening injury?',
        options: ['QM (Quality Management)', 'ASIL A', 'ASIL B', 'ASIL D'],
        correctIndex: 3,
        explanation: 'ASIL D represents the highest hazard integrity level (e.g. electric power steering, braking systems), requiring redundant hardware, strict formal verification, and ASIL-D qualified compilers.'
      }
    ]
  },
  {
    id: 'course-verilog-digital-design',
    domainId: 'vlsi-chip-design',
    title: 'Verilog HDL & Digital ASIC / FPGA Design',
    instructorOrSource: 'ECE Career Hub Academy',
    level: 'Beginner',
    durationHours: 20,
    description: 'Master digital logic, synthesizable Verilog HDL, finite state machines (FSM), static timing analysis (STA), and FPGA implementation.',
    skillsGained: ['Synthesizable Verilog', 'FSM Design (Moore/Mealy)', 'Setup & Hold Calculations', 'FPGA Constraints', 'Testbenches'],
    modules: [
      {
        id: 'vl-m1',
        title: 'Module 1: Combinational Logic & Verilog Syntax',
        duration: '5 Hours',
        topics: ['Data types (wire, reg, logic)', 'Continuous assignments (assign)', 'Multiplexers, decoders & ALUs', 'Procedural always @(*) blocks'],
        labOrExercise: 'Design an 8-bit Arithmetic Logic Unit (ALU) supporting addition, subtraction, AND, OR, and barrel shifting.'
      },
      {
        id: 'vl-m2',
        title: 'Module 2: Sequential Circuits & Non-Blocking Assignments',
        duration: '5 Hours',
        topics: ['Flip-flops and latches', 'Blocking (=) vs Non-blocking (<=) assignments', 'Synchronous vs asynchronous resets', 'Clock dividers'],
        labOrExercise: 'Design a parameterized synchronous FIFO buffer with empty and full flag generation.'
      },
      {
        id: 'vl-m3',
        title: 'Module 3: Finite State Machines (FSM) & Timing Analysis',
        duration: '5 Hours',
        topics: ['Moore vs Mealy machines', '3-process FSM coding style', 'Setup and Hold times (Tsu, Thold)', 'Metastability & 2-flip-flop synchronizers'],
        labOrExercise: 'Design a sequence detector FSM detecting "10110" with overlapping patterns and verify timing slack.'
      },
      {
        id: 'vl-m4',
        title: 'Module 4: FPGA Synthesis & Self-Checking Testbenches',
        duration: '5 Hours',
        topics: ['Writing testbenches with $display, $monitor, and assertions', 'FPGA synthesis tool flow', 'XDC pin constraints', 'On-chip debugging with ILA'],
        labOrExercise: 'Synthesize a digital stopwatch displaying seconds and centiseconds on 7-segment displays on an FPGA.'
      }
    ],
    quiz: [
      {
        question: 'When modeling sequential logic in synthesizable Verilog, which assignment operator must be used?',
        options: [
          'Blocking assignment (=)',
          'Non-blocking assignment (<=)',
          'Continuous assignment (assign)',
          'Pointer reference (->)'
        ],
        correctIndex: 1,
        explanation: 'Non-blocking assignments (<=) evaluate all right-hand sides concurrently, accurately reflecting parallel hardware flip-flops without race conditions.'
      },
      {
        question: 'What causes a "setup time violation" in a digital synchronous circuit?',
        options: [
          'The data input changes too quickly after the active clock edge',
          'The combinational delay between flip-flops is too long, so data arrives after the setup window',
          'The clock frequency is too slow',
          'The reset signal is active high instead of active low'
        ],
        correctIndex: 1,
        explanation: 'Setup time requires data to be stable before the clock edge. If combinational delay + clock skew > clock period - Tsu, a setup violation occurs.'
      },
      {
        question: 'What is the purpose of a 2-flip-flop synchronizer?',
        options: [
          'To increase the clock frequency by 2x',
          'To safely pass asynchronous signals across different clock domains and prevent metastability',
          'To double the data bus width from 8-bit to 16-bit',
          'To create a delay of exactly 1 millisecond'
        ],
        correctIndex: 1,
        explanation: 'A 2-FF synchronizer allows any metastable state from an asynchronous input to resolve before the signal is used in synchronous logic.'
      }
    ]
  },
  {
    id: 'course-iot-protocols-cloud',
    domainId: 'iot-connected-devices',
    title: 'IoT Protocols, Wireless Networks & Cloud Telemetry',
    instructorOrSource: 'ECE Career Hub Academy',
    level: 'Beginner',
    durationHours: 16,
    description: 'Connect microcontrollers to the cloud using MQTT, HTTP, BLE, and LoRaWAN. Store time-series data and design real-time IoT dashboards.',
    skillsGained: ['MQTT Pub/Sub', 'ESP32 Wi-Fi & BLE', 'ThingsBoard / AWS IoT', 'LoRaWAN Long-Range', 'Secure OTA'],
    modules: [
      {
        id: 'iot-m1',
        title: 'Module 1: Microcontroller Wireless Stack (ESP32)',
        duration: '4 Hours',
        topics: ['ESP-IDF framework', 'Wi-Fi station and access point modes', 'Wi-Fi event handling and auto-reconnect', 'Non-volatile storage'],
        labOrExercise: 'Configure an ESP32 to connect to local Wi-Fi with credentials stored securely in flash NVS.'
      },
      {
        id: 'iot-m2',
        title: 'Module 2: Lightweight Machine-to-Machine Protocols',
        duration: '4 Hours',
        topics: ['MQTT broker architecture', 'QoS 0, QoS 1, QoS 2 tradeoffs', 'Last Will and Testament (LWT)', 'JSON payload serialization'],
        labOrExercise: 'Publish temperature and humidity sensor readings to an MQTT broker every 10 seconds.'
      },
      {
        id: 'iot-m3',
        title: 'Module 3: Cloud Dashboards & Device Management',
        duration: '4 Hours',
        topics: ['ThingsBoard & AWS IoT Core', 'Telemetry ingestion', 'Alarms & rule engines', 'Grafana visualization'],
        labOrExercise: 'Design an interactive dashboard showing live sensor dials, historical charts, and email alert thresholds.'
      },
      {
        id: 'iot-m4',
        title: 'Module 4: BLE & Long-Range LoRaWAN',
        duration: '4 Hours',
        topics: ['BLE GATT services and characteristics', 'LoRa spreading factor and link budget', 'ChirpStack / TTN gateway configuration'],
        labOrExercise: 'Create a BLE sensor node transmitting health vitals to a companion web browser via Web Bluetooth.'
      }
    ],
    quiz: [
      {
        question: 'Which MQTT Quality of Service (QoS) guarantees that a message is delivered exactly once without duplicates?',
        options: ['QoS 0', 'QoS 1', 'QoS 2', 'QoS 3'],
        correctIndex: 2,
        explanation: 'QoS 2 uses a four-step handshake (PUBLISH, PUBREC, PUBREL, PUBCOMP) to guarantee exactly-once delivery.'
      },
      {
        question: 'What is the "Last Will and Testament" (LWT) feature in MQTT used for?',
        options: [
          'To permanently delete client records when unsubscribed',
          'To notify other clients when a device unexpectedly disconnects or loses power',
          'To archive historical sensor data into cold storage',
          'To automatically reboot the broker during maintenance'
        ],
        correctIndex: 1,
        explanation: 'The broker publishes the LWT message to a predefined topic if the client disconnects unexpectedly without sending a DISCONNECT packet.'
      }
    ]
  },
  {
    id: 'course-pcb-design-kicad',
    domainId: 'hardware-pcb-design',
    title: 'High-Speed Multi-Layer PCB Design in KiCad 8',
    instructorOrSource: 'ECE Career Hub Academy',
    level: 'Beginner',
    durationHours: 16,
    description: 'Go from schematic to a fabricated 4-layer PCB. Master component footprints, controlled impedance routing, power decoupling, and DFM.',
    skillsGained: ['KiCad 8 Schematics', '4-Layer Stack-up', 'Differential Pairs', 'Thermal Design', 'Gerber & DFM Sign-Off'],
    modules: [
      {
        id: 'pcb-m1',
        title: 'Module 1: Schematic Capture & Electrical Rule Checks (ERC)',
        duration: '4 Hours',
        topics: ['Hierarchical sheets', 'Power symbols and ground nets', 'Passive decoupling strategies', 'ERC troubleshooting'],
        labOrExercise: 'Draw the full schematic for an ARM Cortex-M4 development board with USB-C and power rails.'
      },
      {
        id: 'pcb-m2',
        title: 'Module 2: Footprints & 3D Model Integration',
        duration: '4 Hours',
        topics: ['IPC-7351 footprint standards', 'SMD pads, solder mask, and paste masks', 'Thermal vias and exposed pads', '3D STEP file alignment'],
        labOrExercise: 'Create custom KiCad footprints for a QFN-32 microcontroller and a USB-C receptacle.'
      },
      {
        id: 'pcb-m3',
        title: 'Module 3: 4-Layer Board Stack-up & Controlled Impedance',
        duration: '4 Hours',
        topics: ['SIG-GND-PWR-SIG stack-up', 'Calculating 50-ohm trace width', 'Differential pairs for USB (90 ohm)', 'Unbroken return ground planes'],
        labOrExercise: 'Route 90-ohm USB differential pairs with length matching and continuous reference ground plane.'
      },
      {
        id: 'pcb-m4',
        title: 'Module 4: Design for Manufacturing (DFM) & Assembly',
        duration: '4 Hours',
        topics: ['Design Rule Checks (DRC)', 'Gerber and drill file generation', 'Pick-and-place centroid files', 'Inspection and board bring-up'],
        labOrExercise: 'Export a complete manufacturing package, review Gerbers in a viewer, and verify with manufacturer rules.'
      }
    ],
    quiz: [
      {
        question: 'What is the most critical design practice to avoid signal integrity problems in high-speed PCB traces?',
        options: [
          'Using serpentine tracks on all power traces',
          'Maintaining an unbroken, continuous ground reference plane directly beneath the high-speed signal trace',
          'Placing all decoupling capacitors on the opposite side of the board',
          'Connecting all grounds together using thin 6-mil traces'
        ],
        correctIndex: 1,
        explanation: 'High-speed return currents flow directly under the signal trace. Any split or slot in the reference plane causes EMI and impedance discontinuities.'
      },
      {
        question: 'Why are decoupling capacitors placed as close as possible to a microcontroller power pin?',
        options: [
          'To increase the PCB resale value',
          'To minimize parasitic trace inductance and provide instantaneous charge during transistor switching',
          'To prevent the microcontroller from overheating',
          'To act as a radio antenna for wireless reception'
        ],
        correctIndex: 1,
        explanation: 'Trace inductance impedes rapid current spikes. Placing decoupling capacitors right next to power pins minimizes loop inductance.'
      }
    ]
  },
  {
    id: 'course-modern-comm-5g',
    domainId: 'communication-telecom',
    title: 'Modern Communication Systems & 5G NR Engineering',
    instructorOrSource: 'ECE Career Hub Academy',
    level: 'Intermediate',
    durationHours: 18,
    description: 'Understand 5G NR, digital modulation, OFDM numerology, massive MIMO, link budgets, and RF SDR prototyping.',
    skillsGained: ['5G NR Numerologies', 'OFDM & Cyclic Prefix', 'RF Link Budget', 'MIMO & Beamforming', 'GNU Radio SDR'],
    modules: [
      {
        id: 'comm-m1',
        title: 'Module 1: Digital Modulation & Spectral Efficiency',
        duration: '4 Hours',
        topics: ['QPSK, 16-QAM, 256-QAM constellations', 'Bit Error Rate vs SNR', 'Pulse shaping with Root-Raised Cosine filters'],
        labOrExercise: 'Simulate a QAM transceiver in Python and calculate Error Vector Magnitude (EVM).'
      },
      {
        id: 'comm-m2',
        title: 'Module 2: OFDM Principles & 5G NR Numerology',
        duration: '5 Hours',
        topics: ['Orthogonality of subcarriers', 'FFT implementation of OFDM', 'Cyclic prefix and multipath fading', 'Flexible 5G subcarrier spacing (15 to 120 kHz)'],
        labOrExercise: 'Build an OFDM modulator/demodulator pipeline and observe multipath channel mitigation.'
      },
      {
        id: 'comm-m3',
        title: 'Module 3: Link Budget & Antenna Arrays',
        duration: '4 Hours',
        topics: ['Friis transmission equation', 'Path loss models at sub-6 GHz and mmWave', 'Beamforming phase shifters', 'Massive MIMO gain'],
        labOrExercise: 'Calculate a complete 5G link budget determining cell radius for a given transmitter power and receiver sensitivity.'
      },
      {
        id: 'comm-m4',
        title: 'Module 4: Software-Defined Radio (SDR) with GNU Radio',
        duration: '5 Hours',
        topics: ['I/Q signal representation', 'GNU Radio Companion flowgraphs', 'Carrier frequency offset correction', 'Decoding real-world signals'],
        labOrExercise: 'Build an SDR flowgraph to decode live FM radio broadcast audio and display real-time RF spectrum.'
      }
    ],
    quiz: [
      {
        question: 'What is the primary function of the Cyclic Prefix (CP) in an OFDM transmission?',
        options: [
          'To encode user passwords securely',
          'To eliminate Inter-Symbol Interference (ISI) caused by multipath channel delay spread',
          'To increase the peak transmit power by 10 dB',
          'To replace the need for an analog-to-digital converter'
        ],
        correctIndex: 1,
        explanation: 'The Cyclic Prefix copies the end of an OFDM symbol to the front, converting linear convolution into circular convolution and preventing ISI.'
      }
    ]
  },
  {
    id: 'course-dsp-filter-design',
    domainId: 'signal-processing',
    title: 'Digital Signal Processing & Filter Design',
    instructorOrSource: 'ECE Career Hub Academy',
    level: 'Intermediate',
    durationHours: 18,
    description: 'Learn discrete signals, FFT algorithms, FIR/IIR digital filter design, audio processing, and fixed-point ARM CMSIS-DSP implementation.',
    skillsGained: ['Z-Transform Analysis', 'FIR/IIR Filter Design', 'FFT Optimization', 'CMSIS-DSP on ARM', 'Audio Equalizers'],
    modules: [
      {
        id: 'dsp-m1',
        title: 'Module 1: Sampling, Z-Transform & Frequency Response',
        duration: '4 Hours',
        topics: ['Nyquist sampling & anti-aliasing', 'Discrete convolution', 'Z-transform pole-zero stability', 'Bode magnitude and phase response'],
        labOrExercise: 'Plot pole-zero diagrams in Python and evaluate whether systems are causal and stable.'
      },
      {
        id: 'dsp-m2',
        title: 'Module 2: FIR & IIR Digital Filter Synthesis',
        duration: '5 Hours',
        topics: ['FIR windowing methods', 'Linear phase benefits', 'Bilinear transform for Butterworth/Chebyshev IIR', 'Filter order calculation'],
        labOrExercise: 'Synthesize a 50 Hz powerline notch filter in Python and apply it to a noisy ECG biomedical signal.'
      },
      {
        id: 'dsp-m3',
        title: 'Module 3: Fast Fourier Transform & Spectral Analysis',
        duration: '5 Hours',
        topics: ['Cooley-Tukey Radix-2 FFT', 'Window functions (Hanning, Blackman)', 'Short-Time Fourier Transform (STFT)', 'Spectrogram creation'],
        labOrExercise: 'Implement a real-time audio spectrogram visualizer analyzing human speech frequencies.'
      },
      {
        id: 'dsp-m4',
        title: 'Module 4: Embedded Implementation with ARM CMSIS-DSP',
        duration: '4 Hours',
        topics: ['Q15 & Q31 fixed-point math', 'ARM Cortex-M4 DSP instructions', 'Biquad cascade IIR filtering', 'Real-time DMA audio buffers'],
        labOrExercise: 'Deploy an ARM CMSIS-DSP biquad low-pass filter processing audio streaming through I2S.'
      }
    ],
    quiz: [
      {
        question: 'Which type of digital filter is guaranteed to be unconditionally stable and can achieve exact linear phase?',
        options: ['IIR Filter', 'FIR Filter', 'Chebyshev Type I Filter', 'Elliptic Filter'],
        correctIndex: 1,
        explanation: 'FIR filters have all poles at the origin (z=0), making them inherently stable, and symmetric impulse responses guarantee linear phase.'
      }
    ]
  },
  {
    id: 'course-ros2-robotics',
    domainId: 'robotics-automation',
    title: 'ROS 2, Control Systems & Autonomous Mobile Robots',
    instructorOrSource: 'ECE Career Hub Academy',
    level: 'Intermediate',
    durationHours: 20,
    description: 'Program robots with ROS 2, simulate in Gazebo, master PID feedback control, and deploy SLAM navigation algorithms.',
    skillsGained: ['ROS 2 Nodes & Topics', 'PID Feedback Control', 'Gazebo Simulation', 'LiDAR SLAM Navigation', 'Kinematics'],
    modules: [
      {
        id: 'ros-m1',
        title: 'Module 1: Feedback Systems & PID Motor Control',
        duration: '5 Hours',
        topics: ['Closed loop transfer functions', 'PID gain tuning (Kp, Ki, Kd)', 'Integral windup prevention', 'Step response analysis'],
        labOrExercise: 'Code a discrete C++ PID controller regulating wheel speed under simulated load.'
      },
      {
        id: 'ros-m2',
        title: 'Module 2: Industrial PLC & SCADA Basics',
        duration: '4 Hours',
        topics: ['Ladder logic fundamentals', 'Timers, counters, and interlocks', 'Structured text programming', 'HMI alarm display design'],
        labOrExercise: 'Build a simulated sorting conveyor logic program using PLC ladder diagrams.'
      },
      {
        id: 'ros-m3',
        title: 'Module 3: ROS 2 Architecture & Communication',
        duration: '5 Hours',
        topics: ['ROS 2 Humble setup', 'Publishers, subscribers, services, and actions', 'URDF robot description', 'TF2 coordinate frame transforms'],
        labOrExercise: 'Create a custom ROS 2 C++ node publishing velocity commands to a simulated mobile robot.'
      },
      {
        id: 'ros-m4',
        title: 'Module 4: Gazebo Simulation, SLAM & Nav2',
        duration: '6 Hours',
        topics: ['Gazebo physics engine', 'LiDAR sensor integration', 'SLAM Toolbox for map building', 'Nav2 autonomous waypoint navigation'],
        labOrExercise: 'Drive a robot in a virtual warehouse in Gazebo, map the environment, and send autonomous navigation goals.'
      }
    ],
    quiz: [
      {
        question: 'In a PID controller, what is the role of the "Integral" (Ki) term?',
        options: [
          'To predict future errors based on rate of change',
          'To eliminate steady-state error by accumulating past error over time',
          'To reduce high-frequency noise from sensor readings',
          'To invert the sign of the motor control voltage'
        ],
        correctIndex: 1,
        explanation: 'The integral term accumulates offset over time until steady-state error drops to zero, ensuring exact target tracking.'
      }
    ]
  },
  {
    id: 'course-ev-powertrain-bms',
    domainId: 'automotive-ev',
    title: 'Electric Vehicle Powertrain & BMS Engineering',
    instructorOrSource: 'ECE Career Hub Academy',
    level: 'Intermediate',
    durationHours: 18,
    description: 'Learn EV architectures, Battery Management Systems (BMS), cell balancing, CAN bus communications, and Field Oriented Control (FOC).',
    skillsGained: ['BMS Architecture', 'SoC Estimation', 'Passive Cell Balancing', 'CAN Bus Decoding', 'FOC Motor Drives'],
    modules: [
      {
        id: 'ev-m1',
        title: 'Module 1: Lithium Batteries & High-Voltage Architecture',
        duration: '4 Hours',
        topics: ['NMC vs LFP chemistry', 'Series-parallel battery pack configurations', 'High voltage interlock loop (HVIL)', 'Pre-charge circuits'],
        labOrExercise: 'Design the electrical contactor and pre-charge circuit for a 400V EV traction battery pack.'
      },
      {
        id: 'ev-m2',
        title: 'Module 2: Battery Management Systems (BMS) Algorithm Design',
        duration: '5 Hours',
        topics: ['Analog Front End (AFE) ICs', 'State of Charge (SoC) Coulomb counting', 'Passive vs active cell balancing', 'Thermal runaway mitigation'],
        labOrExercise: 'Implement a Coulomb counting SoC estimation algorithm in C with open-circuit voltage calibration.'
      },
      {
        id: 'ev-m3',
        title: 'Module 3: In-Vehicle CAN Bus & Diagnostics',
        duration: '4 Hours',
        topics: ['CAN 2.0B / CAN-FD message framing', 'DBC files and signal scaling', 'Unified Diagnostic Services (UDS)', 'OBD-II vehicle logging'],
        labOrExercise: 'Parse raw CAN frames into battery voltage, current, and temperature metrics using a DBC specification.'
      },
      {
        id: 'ev-m4',
        title: 'Module 4: Field Oriented Control (FOC) for EV Motors',
        duration: '5 Hours',
        topics: ['PMSM and BLDC traction motors', 'Clark and Park coordinate transformations', 'Space Vector PWM', 'Inverter gate drivers with SiC MOSFETs'],
        labOrExercise: 'Simulate the current loop and torque response of an EV traction motor under rapid acceleration in Simulink.'
      }
    ],
    quiz: [
      {
        question: 'Why is cell balancing required in multi-cell Lithium-ion battery packs?',
        options: [
          'To ensure all cells discharge at different speeds',
          'Because variations in cell capacity and internal resistance cause cells to reach full charge or discharge unevenly, limiting usable pack capacity',
          'To convert DC voltage into AC voltage inside the pack',
          'To heat up the battery pack in freezing temperatures'
        ],
        correctIndex: 1,
        explanation: 'Without cell balancing, the weakest or highest-voltage cell triggers an early cutoff, stranding usable energy in all other cells.'
      }
    ]
  }
];
