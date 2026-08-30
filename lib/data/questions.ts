import type { Question } from "@/lib/types";

const EXAM_2023 = "Unity University · UUFWP/402 · 1st Sem Test, 2023";
const EXAM_2025 = "Unity University · UUFWP/135 · 2nd Sem Test, 2025";

export const questions: Question[] = [
  {
    id: "f-001",
    moduleId: "fundamentals",
    type: "mcq",
    prompt:
      "What is the role of the Common Language Runtime (CLR) in the .NET framework?",
    options: [
      "Compiling programs",
      "Garbage collection",
      "Executing programs",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "The CLR is the execution engine of .NET: it hosts JIT compilation of IL to native code, manages memory and garbage collection, enforces type safety, and actually executes the running program — so all three roles apply.",
    examSource: EXAM_2023,
    difficulty: "easy",
  },
  {
    id: "f-002",
    moduleId: "fundamentals",
    type: "mcq",
    prompt:
      "How can programs written in VB.NET and C# operate together without any conflict?",
    options: [
      "Each program is executed independently",
      "Both language programs are compiled to the same code",
      "Only by passing data between them",
      "All of the above",
    ],
    correctAnswer: "Both language programs are compiled to the same code",
    explanation:
      "Both VB.NET and C# compile down to the same Common Intermediate Language (CIL), which the CLR executes — that shared intermediate representation, governed by the Common Language Specification, is what makes cross-language interoperability possible.",
    examSource: EXAM_2023,
    difficulty: "medium",
  },
  {
    id: "f-003",
    moduleId: "fundamentals",
    type: "mcq",
    prompt:
      "Which of the following is NOT an object that provides the functionality of a data provider in ADO.NET?",
    options: ["Connection", "DataReader", "Command", "DataSet"],
    correctAnswer: "DataSet",
    explanation:
      "Connection, Command, and DataReader are part of a .NET Data Provider (the connected layer). DataSet is a disconnected, in-memory cache of data that a DataAdapter fills — it is not itself a data-provider object.",
    examSource: EXAM_2023,
    difficulty: "medium",
  },
  {
    id: "f-004",
    moduleId: "fundamentals",
    type: "mcq",
    prompt:
      "Which provider is able to connect an MS Access database to a .NET application?",
    options: [
      "OLEDB Data Provider",
      "SQL Data Provider",
      "ODBC Data Provider",
      "All of the above",
    ],
    correctAnswer: "OLEDB Data Provider",
    explanation:
      "MS Access databases are accessed through the OLEDB Data Provider (e.g. System.Data.OleDb); the SQL provider targets SQL Server specifically.",
    examSource: EXAM_2023,
    difficulty: "medium",
  },
  {
    id: "f-005",
    moduleId: "fundamentals",
    type: "mcq",
    prompt:
      "Which one is the disconnected representation of result sets from a data source in ADO.NET?",
    options: ["Data Adapter", "DataReader", "Command", "DataSet"],
    correctAnswer: "DataSet",
    explanation:
      "A DataSet is disconnected — it holds data in memory after the connection has closed, and supports browsing in both directions plus inserts/updates/deletes, unlike the forward-only, connected DataReader.",
    examSource: EXAM_2023,
    difficulty: "medium",
  },
  {
    id: "f-006",
    moduleId: "fundamentals",
    type: "truefalse",
    prompt: "The full form of LINQ is 'Linked-Integrated Query'.",
    correctAnswer: "False",
    explanation:
      "LINQ stands for Language Integrated Query — queries written directly in a .NET language's own syntax.",
    examSource: EXAM_2025,
    difficulty: "easy",
  },
  {
    id: "f-007",
    moduleId: "fundamentals",
    type: "truefalse",
    prompt:
      "Using the Mono framework, a developed .NET application can run on any operating system.",
    correctAnswer: "True",
    explanation:
      "Mono is an open-source implementation of the .NET Framework that runs on Linux, macOS, and Windows, giving .NET applications cross-platform reach.",
    examSource: EXAM_2025,
    difficulty: "easy",
  },
  {
    id: "f-008",
    moduleId: "fundamentals",
    type: "mcq",
    prompt:
      "A class must implement which interface(s) to provide querying facility using LINQ?",
    options: [
      "IEnumerator or IQueryable",
      "IEnumerable or IQueryable",
      "Enumerable or Queryable",
      "None of the above",
    ],
    correctAnswer: "IEnumerable or IQueryable",
    explanation:
      "IEnumerable supports simple in-memory iteration, while IQueryable lets LINQ build queries that can be translated (e.g. to SQL) before execution.",
    examSource: EXAM_2025,
    difficulty: "medium",
  },
  {
    id: "f-009",
    moduleId: "fundamentals",
    type: "mcq",
    prompt: "Which of the following supports LINQ queries?",
    options: [
      "Object collections",
      "XML documents",
      "Entity Framework",
      "All of the mentioned",
    ],
    correctAnswer: "All of the mentioned",
    explanation:
      "LINQ is a general query facility that works over object collections, XML documents, and Entity Framework data sources alike.",
    examSource: EXAM_2025,
    difficulty: "easy",
  },
  {
    id: "f-010",
    moduleId: "fundamentals",
    type: "mcq",
    prompt:
      "What is the correct order of query operators in a typical SQL-style query?",
    options: [
      "SELECT -> FROM -> OUTER -> WHERE",
      "FROM -> OUTER -> WHERE -> ON",
      "SELECT -> FROM -> WHERE -> OUTER",
      "FROM -> OUTER -> GROUP BY -> WHERE",
    ],
    correctAnswer: "SELECT -> FROM -> WHERE -> OUTER",
    explanation:
      "First select the columns, specify the data source (FROM), filter (WHERE), then apply any outer joins.",
    examSource: EXAM_2025,
    difficulty: "medium",
  },
  {
    id: "f-011",
    moduleId: "fundamentals",
    type: "mcq",
    prompt:
      "When user participation is not involved, which pair of methodologies is least likely to produce the desired outcome?",
    options: [
      "Prototyping & RAD",
      "Waterfall & Spiral",
      "Agile & Waterfall",
      "Waterfall & RAD",
    ],
    correctAnswer: "Prototyping & RAD",
    explanation:
      "Both Prototyping and Rapid Application Development depend on continuous, active user feedback to refine the product — without user involvement, neither can converge on the right result.",
    examSource: EXAM_2025,
    difficulty: "hard",
  },
  {
    id: "f-012",
    moduleId: "fundamentals",
    type: "fillblank",
    prompt:
      "Fill in the blank: A variable is a location in the computer's ____ where a value can be stored for use by a program.",
    correctAnswer: "memory",
    explanation:
      "Variables are named areas of memory that hold values of a given data type.",
    examSource: EXAM_2023,
    difficulty: "easy",
  },
  {
    id: "f-013",
    moduleId: "fundamentals",
    type: "mcq",
    prompt: "When should you prefer Rapid Application Development (RAD)?",
    options: [
      "When requirements are poorly understood and the budget is unlimited",
      "When requirements are well understood, the project is small-to-medium, and it must be delivered quickly",
      "Only for large, high-complexity enterprise systems",
      "Only when no user feedback is available",
    ],
    correctAnswer:
      "When requirements are well understood, the project is small-to-medium, and it must be delivered quickly",
    explanation:
      "RAD fits time-sensitive, small-to-medium, low-complexity projects with well-understood requirements, an adequate budget, and reliable prototype testing.",
    difficulty: "medium",
  },

  {
    id: "c-001",
    moduleId: "csharp-syntax",
    type: "mcq",
    prompt: "Which of the following is NOT a valid C# data type keyword?",
    options: ["Boolean", "Decimal", "Bit", "Byte"],
    correctAnswer: "Bit",
    explanation:
      "C# has bool, decimal, and byte as built-in keywords, but there is no 'Bit' data type keyword in C#.",
    examSource: EXAM_2025,
    difficulty: "easy",
  },
  {
    id: "c-002",
    moduleId: "csharp-syntax",
    type: "truefalse",
    prompt:
      "In C#, reserved keywords can be used as identifiers by prefixing them with the @ character.",
    correctAnswer: "True",
    explanation:
      "The verbatim identifier prefix @ lets you use a keyword as a name, e.g. @class or @int.",
    examSource: EXAM_2025,
    difficulty: "easy",
  },
  {
    id: "c-003",
    moduleId: "csharp-syntax",
    type: "mcq",
    prompt:
      "What is the difference between a value type and a reference type in C#?",
    options: [
      "Value types are stored on the heap, reference types on the stack",
      "Value types cannot be null, reference types can",
      "Reference types cannot be null, value types can",
      "Value types are stored on the stack, reference types are stored on the heap",
    ],
    correctAnswer:
      "Value types are stored on the stack, reference types are stored on the heap",
    explanation:
      "Value types (int, double, struct, ...) live on the stack and are copied by value; reference types (class, string, array, ...) live on the heap and variables hold a reference/address to them.",
    examSource: EXAM_2025,
    difficulty: "medium",
  },
  {
    id: "c-004",
    moduleId: "csharp-syntax",
    type: "mcq",
    prompt:
      "What is the access modifier for a class member that can only be accessed within the same class?",
    options: ["public", "private", "protected", "internal"],
    correctAnswer: "private",
    explanation:
      "private restricts access to the declaring class only; protected extends access to subclasses too.",
    examSource: EXAM_2025,
    difficulty: "easy",
  },
  {
    id: "c-005",
    moduleId: "csharp-syntax",
    type: "mcq",
    prompt: "What would be the output of the following code?",
    code: `int x = 10;
while (x > 5) {
    x--;
    Console.Write(x);
}`,
    options: ["1098765", "98765", "9876", "error"],
    correctAnswer: "98765",
    explanation:
      "x starts at 10. Each loop pass decrements first, then prints: 9, 8, 7, 6, 5 — the loop stops once x reaches 5 because the check x > 5 then fails, so the concatenated output is 98765.",
    examSource: EXAM_2025,
    difficulty: "medium",
  },
  {
    id: "c-006",
    moduleId: "csharp-syntax",
    type: "mcq",
    prompt: "What would be the output of the following program?",
    code: `int a = 4, b = 6;
switch (a + b / 2) {
    case 4: Console.WriteLine("case 4"); break;
    case 5: Console.WriteLine("case 5"); break;
    case 7: Console.WriteLine("case 7"); break;
    case 10: Console.WriteLine("case 10"); break;
}`,
    options: ["case 4", "case 5", "case 7", "case 10"],
    correctAnswer: "case 7",
    explanation:
      "Division happens before addition: b / 2 = 3, then a + 3 = 7, matching case 7.",
    examSource: EXAM_2025,
    difficulty: "medium",
  },
  {
    id: "c-007",
    moduleId: "csharp-syntax",
    type: "mcq",
    prompt:
      "Which of the following statements about the while loop is NOT true?",
    options: [
      "It checks its condition at the bottom of the loop",
      "When the condition evaluates to false, the loop terminates",
      "The process of evaluation continues until the condition is false",
      "If the condition evaluates to true, the code inside the while loop is executed",
    ],
    correctAnswer: "It checks its condition at the bottom of the loop",
    explanation:
      "A while loop checks its condition at the TOP, before each iteration — that's what distinguishes it from a do...while loop.",
    examSource: EXAM_2025,
    difficulty: "medium",
  },
  {
    id: "c-008",
    moduleId: "csharp-syntax",
    type: "mcq",
    prompt: "What would be the output from the following C# code segment?",
    code: `int[] arr = { 1, 2, 3, 4, 5 };
Console.Write(arr[10]);
Console.WriteLine("End of Program");`,
    options: [
      "End of Program",
      "System.IndexOutOfRangeException",
      "System.NullReferenceException",
      "No output and no exception",
    ],
    correctAnswer: "System.IndexOutOfRangeException",
    explanation:
      "arr only has indices 0–4; accessing arr[10] is out of bounds and throws an IndexOutOfRangeException at runtime.",
    examSource: EXAM_2025,
    difficulty: "medium",
  },
  {
    id: "c-009",
    moduleId: "csharp-syntax",
    type: "mcq",
    prompt: "What is the output of the following code?",
    code: `bool x = true;
Console.Write(Convert.ToString(x));`,
    options: ["true", "True", "1", "TRUE"],
    correctAnswer: "True",
    explanation:
      "Convert.ToString(bool) yields the capitalized literal 'True' or 'False', matching bool.ToString().",
    examSource: EXAM_2025,
    difficulty: "easy",
  },
  {
    id: "c-010",
    moduleId: "csharp-syntax",
    type: "fillblank",
    prompt:
      'What is the output of the following code? Console.WriteLine($"{greet} {name}"); where greet = "Hello" and name = "Ethiopia".',
    correctAnswer: "Hello Ethiopia",
    explanation:
      "The $ prefix makes it an interpolated string — {greet} and {name} are substituted directly, producing 'Hello Ethiopia'.",
    examSource: EXAM_2025,
    difficulty: "easy",
  },
  {
    id: "c-011",
    moduleId: "csharp-syntax",
    type: "mcq",
    prompt:
      "Given int a = 5; int b = 4;, what does Console.WriteLine(a + b++); print, and what is b afterwards?",
    correctAnswer: "Prints 9; b becomes 5",
    options: [
      "Prints 9; b becomes 5",
      "Prints 10; b becomes 5",
      "Prints 9; b stays 4",
      "Prints 10; b stays 4",
    ],
    explanation:
      "b++ is post-increment: the expression uses b's current value (4) first, so a + b = 9 is printed, and only afterward does b become 5.",
    difficulty: "medium",
  },
  {
    id: "c-012",
    moduleId: "csharp-syntax",
    type: "mcq",
    prompt: "What does the expression 11 % 3 evaluate to in C#?",
    options: ["3", "2", "3.66", "0"],
    correctAnswer: "2",
    explanation:
      "% is the remainder operator: 11 divided by 3 is 3 remainder 2.",
    difficulty: "easy",
  },
  {
    id: "c-013",
    moduleId: "csharp-syntax",
    type: "mcq",
    prompt: "Which suffix marks a literal as type decimal in C#?",
    options: ["f or F", "d or D", "m or M", "l or L"],
    correctAnswer: "m or M",
    explanation:
      "decimal salary = 12345.67m; — the m/M suffix is required for decimal literals with monetary precision.",
    difficulty: "easy",
  },
  {
    id: "c-014",
    moduleId: "csharp-syntax",
    type: "mcq",
    prompt:
      "What is the key difference between Parse and TryParse when converting a string to a number?",
    options: [
      "Parse throws an exception on invalid input; TryParse returns false instead",
      "TryParse throws an exception on invalid input; Parse returns false instead",
      "They behave identically",
      "Parse only works on integers; TryParse works on all types",
    ],
    correctAnswer:
      "Parse throws an exception on invalid input; TryParse returns false instead",
    explanation:
      "TryParse is the safer choice for user input validation because it reports failure via a boolean instead of throwing.",
    difficulty: "medium",
  },

  // ---------------- oop ----------------
  {
    id: "o-001",
    moduleId: "oop",
    type: "mcq",
    prompt:
      "In Visual Basic-style UI design, a control like Button1 primarily represents a(n):",
    options: ["Object", "Procedure", "Class", "Method"],
    correctAnswer: "Object",
    explanation:
      "Button1 is a specific instance created from the Button class, so it is an object — the class is the template, the button on the form is the object.",
    examSource: EXAM_2023,
    difficulty: "easy",
  },
  {
    id: "o-002",
    moduleId: "oop",
    type: "fillblank",
    prompt:
      "Fill in the blank: The property and method of an object are defined by its ____.",
    correctAnswer: "class",
    explanation:
      "A class is the blueprint that specifies which properties, methods, and events any object created from it will have.",
    examSource: EXAM_2023,
    difficulty: "easy",
  },
  {
    id: "o-003",
    moduleId: "oop",
    type: "fillblank",
    prompt:
      "Fill in the blank: An object is a ____ that has been allocated and configured according to a class blueprint.",
    correctAnswer: "block of memory",
    explanation:
      "Instantiating a class allocates a block of memory configured to hold the data and behavior the class defines.",
    examSource: EXAM_2025,
    difficulty: "medium",
  },
  {
    id: "o-004",
    moduleId: "oop",
    type: "mcq",
    prompt:
      "Which one of the following is the correct statement to set the property of an object at run time?",
    options: [
      "Object.value = property",
      "Object.property = value",
      "value = Object.property",
      "Event.property = value",
    ],
    correctAnswer: "Object.property = value",
    explanation:
      'Properties are set by assigning to Object.PropertyName, e.g. textBox1.Text = "Hello";',
    examSource: EXAM_2023,
    difficulty: "easy",
  },
  {
    id: "o-005",
    moduleId: "oop",
    type: "mcq",
    prompt:
      "Given the class hierarchy below, what is printed by obj1.DoSomething();?",
    code: `class BaseClass {
    public virtual void DoSomething() {
        Console.WriteLine("This is the baseClass saying hi!");
    }
}
class SubClass : BaseClass {
    public override void DoSomething() {
        base.DoSomething();
        Console.WriteLine("This is the subClass saying hi!");
    }
}
BaseClass obj1 = new SubClass();
obj1.DoSomething();`,
    options: [
      "This is the baseClass saying hi!",
      "This is the subClass saying hi!",
      "This is the baseClass saying hi! then This is the subClass saying hi!",
      "Compile-time error",
    ],
    correctAnswer:
      "This is the baseClass saying hi! then This is the subClass saying hi!",
    explanation:
      "Because DoSomething is overridden and obj1's runtime type is SubClass, its override runs, which explicitly calls base.DoSomething() first, then prints its own line.",
    difficulty: "medium",
  },
  {
    id: "o-006",
    moduleId: "oop",
    type: "mcq",
    prompt:
      "Which keyword marks a base class method as changeable by a derived class?",
    options: ["override", "virtual", "sealed", "abstract"],
    correctAnswer: "virtual",
    explanation:
      "virtual on the base method allows a subclass to provide its own implementation with override; sealed prevents further overriding.",
    difficulty: "easy",
  },
  {
    id: "o-007",
    moduleId: "oop",
    type: "mcq",
    prompt: "Which statement about abstract classes is correct?",
    options: [
      "An abstract class can be instantiated directly with new",
      "An abstract class must be subclassed, and its abstract members must be overridden in the derived class",
      "An abstract class cannot contain any concrete (non-abstract) methods",
      "An abstract class prevents any further subclassing",
    ],
    correctAnswer:
      "An abstract class must be subclassed, and its abstract members must be overridden in the derived class",
    explanation:
      "Abstract classes cannot be instantiated on their own; a concrete derived class must supply implementations for all abstract members.",
    difficulty: "medium",
  },
  {
    id: "o-008",
    moduleId: "oop",
    type: "mcq",
    prompt:
      "What defines the 'contract' that an interface provides to implementing classes?",
    options: [
      "The private fields of the interface",
      "The public method/property signatures that implementing classes must supply",
      "The constructor of the interface",
      "The interface's namespace",
    ],
    correctAnswer:
      "The public method/property signatures that implementing classes must supply",
    explanation:
      "The interface defines the 'what' (signatures); each implementing class defines the 'how' (implementation).",
    difficulty: "medium",
  },
  {
    id: "o-009",
    moduleId: "oop",
    type: "truefalse",
    prompt:
      "If you don't write a constructor for a C# class, the compiler creates a default, parameterless public constructor.",
    correctAnswer: "True",
    explanation:
      "This implicit default constructor only appears when no other constructor is explicitly declared.",
    difficulty: "easy",
  },
  {
    id: "o-010",
    moduleId: "oop",
    type: "mcq",
    prompt: "What is method overloading?",
    options: [
      "Defining multiple methods with the same name but different parameter signatures",
      "Redefining a base class method in a derived class",
      "Declaring a method as static",
      "Hiding a field with a property of the same name",
    ],
    correctAnswer:
      "Defining multiple methods with the same name but different parameter signatures",
    explanation:
      "Overloading lets CalculateArea(double, double) and CalculateArea(double) coexist in the same class, distinguished by their parameter lists.",
    difficulty: "easy",
  },
  {
    id: "o-011",
    moduleId: "oop",
    type: "mcq",
    prompt:
      "In a generic type like List<T>, what does the type parameter T let you do?",
    options: [
      "Restrict the class to only work with strings",
      "Parameterize the class so it can safely work with different specific types (List<int>, List<string>, ...)",
      "Force all methods to become static",
      "Remove the need for a constructor",
    ],
    correctAnswer:
      "Parameterize the class so it can safely work with different specific types (List<int>, List<string>, ...)",
    explanation:
      "Generics let one class definition be reused, type-safely, for many concrete element types.",
    difficulty: "medium",
  },

  // ---------------- delegates-events ----------------
  {
    id: "d-001",
    moduleId: "delegates-events",
    type: "mcq",
    prompt:
      "In a Visual Basic statement such as Me.Close(), what does the keyword 'Me' (equivalent to 'this' in C#) refer to?",
    options: [
      "A property",
      "The current class/instance",
      "A method",
      "An event",
    ],
    correctAnswer: "The current class/instance",
    explanation:
      "'Me' (VB) / 'this' (C#) is a self-reference to the current object instance, letting code call its own members explicitly.",
    examSource: EXAM_2023,
    difficulty: "easy",
  },
  {
    id: "d-002",
    moduleId: "delegates-events",
    type: "mcq",
    prompt:
      "The statement used in a called function procedure to pass the value of an expression back to the calling procedure is:",
    options: ["Yield", "Return", "Exit", "Out"],
    correctAnswer: "Return",
    explanation:
      "The return statement sends a value from inside a method back to wherever it was called.",
    examSource: EXAM_2023,
    difficulty: "easy",
  },
  {
    id: "d-003",
    moduleId: "delegates-events",
    type: "mcq",
    prompt: "What is a delegate in C#?",
    options: [
      "A reference-type variable that holds a reference to a method with a matching signature",
      "A synonym for a class",
      "A keyword that marks a method as static",
      "A special kind of loop",
    ],
    correctAnswer:
      "A reference-type variable that holds a reference to a method with a matching signature",
    explanation:
      "Delegates are typed method references whose target can be swapped at runtime — the foundation of the event pattern.",
    difficulty: "medium",
  },
  {
    id: "d-004",
    moduleId: "delegates-events",
    type: "mcq",
    prompt: "Given this delegate usage, what is printed?",
    code: `public delegate int NumberFunction(int x);
static int Square(int num) => num * num;
static int Cube(int num) => num * num * num;

NumberFunction f = Square;
Console.WriteLine(f(5));
f = Cube;
Console.WriteLine(f(5));`,
    options: ["25 then 125", "5 then 5", "125 then 25", "Compile-time error"],
    correctAnswer: "25 then 125",
    explanation:
      "f first points at Square (5*5=25), then is reassigned to Cube (5*5*5=125) — the delegate's target changed at runtime.",
    difficulty: "medium",
  },
  {
    id: "d-005",
    moduleId: "delegates-events",
    type: "mcq",
    prompt:
      "If a parameter is declared with the out keyword, what must be true?",
    options: [
      "The caller must initialize the variable before passing it",
      "The caller does NOT need to initialize the variable before passing it, and the method must assign it before returning",
      "The parameter is passed by value only",
      "out parameters cannot be used with numeric types",
    ],
    correctAnswer:
      "The caller does NOT need to initialize the variable before passing it, and the method must assign it before returning",
    explanation:
      "out is designed for returning extra values through parameters — the callee is required to assign the out parameter before the method returns.",
    difficulty: "medium",
  },
  {
    id: "d-006",
    moduleId: "delegates-events",
    type: "mcq",
    prompt:
      "Once one optional parameter is defined in a method signature, what rule applies to the parameters after it?",
    options: [
      "They must all also be declared optional",
      "They must all be declared ref",
      "There is no restriction",
      "They must be declared before it instead",
    ],
    correctAnswer: "They must all also be declared optional",
    explanation:
      "C# requires that once you introduce a default value for a parameter, every parameter that follows must also have one.",
    difficulty: "medium",
  },
  {
    id: "d-007",
    moduleId: "delegates-events",
    type: "mcq",
    prompt:
      "What keyword lets a method accept a variable number of arguments as an array?",
    options: ["ref", "out", "params", "var"],
    correctAnswer: "params",
    explanation:
      "static int AddNumbers(params int[] nums) lets callers pass any number of int arguments, collected into an array.",
    difficulty: "easy",
  },

  // ---------------- winforms-controls ----------------
  {
    id: "w-001",
    moduleId: "winforms-controls",
    type: "mcq",
    prompt: "The title of a form is defined by its ____ property.",
    options: ["Name", "Menu", "Caption", "Text"],
    correctAnswer: "Text",
    explanation:
      "In Windows Forms, a form's Text property controls what is shown in its title bar (Caption is the old VB6 term).",
    examSource: EXAM_2023,
    difficulty: "easy",
  },
  {
    id: "w-002",
    moduleId: "winforms-controls",
    type: "mcq",
    prompt:
      "Which control object is used to display two mutually-exclusive options such as Male or Female?",
    options: [
      "CheckBox Control",
      "MaskedTextBox Control",
      "RadioButton Control",
      "TextBox Control",
    ],
    correctAnswer: "RadioButton Control",
    explanation:
      "RadioButtons in the same group let a user choose exactly one option among several; CheckBoxes allow independent on/off choices.",
    examSource: EXAM_2023,
    difficulty: "easy",
  },
  {
    id: "w-003",
    moduleId: "winforms-controls",
    type: "mcq",
    prompt:
      "If a Button's Text property is set to \"H&ELLO\", what is the button's access (hot) key?",
    options: ["H", "E", "L", "O"],
    correctAnswer: "E",
    explanation:
      "The character immediately following & becomes the underlined access key — here that's the 'E' in H&ELLO.",
    examSource: EXAM_2023,
    difficulty: "medium",
  },
  {
    id: "w-004",
    moduleId: "winforms-controls",
    type: "mcq",
    prompt:
      "Given a 2D array declared as SGPA(1,3) — where the first index (0 or 1) is the semester and the second index (0–3) is the year — which index expression accesses the GPA for semester 2 in year 3?",
    options: ["SGPA(2,3)", "SGPA(1,2)", "SGPA(1,3)", "SGPA(2,1)"],
    correctAnswer: "SGPA(1,2)",
    explanation:
      "Indexes are zero-based: semester 2 is index 1, and year 3 is index 2, giving SGPA(1,2).",
    examSource: EXAM_2023,
    difficulty: "hard",
  },
  {
    id: "w-005",
    moduleId: "winforms-controls",
    type: "mcq",
    prompt: "Which method is used to eliminate a single item from a ComboBox?",
    options: ["Delete()", "Remove()", "Close()", "Clear()"],
    correctAnswer: "Remove()",
    explanation:
      "Items.Remove(item) removes one specific item; Clear() empties the whole collection instead.",
    examSource: EXAM_2023,
    difficulty: "medium",
  },
  {
    id: "w-006",
    moduleId: "winforms-controls",
    type: "mcq",
    prompt:
      "Which is the correct syntax to add a value to a ListBox or ComboBox object?",
    options: [
      "ObjectName.Add.Items(Value)",
      "ObjectName.Items.Add(Value)",
      "ObjectName.Items(Value)",
      "ObjectName.add(Value)",
    ],
    correctAnswer: "ObjectName.Items.Add(Value)",
    explanation:
      'The Items collection exposes Add(...) — e.g. listBox1.Items.Add("New entry");',
    examSource: EXAM_2023,
    difficulty: "easy",
  },
  {
    id: "w-007",
    moduleId: "winforms-controls",
    type: "mcq",
    prompt: "TextBox1.Clear() — the Clear() call here is known as a:",
    options: ["Property", "Class", "Method", "Event"],
    correctAnswer: "Method",
    explanation:
      "Clear() is a callable behavior (a method) on the TextBox object, as opposed to a property you read/assign.",
    examSource: EXAM_2023,
    difficulty: "easy",
  },
  {
    id: "w-008",
    moduleId: "winforms-controls",
    type: "fillblank",
    prompt:
      "Fill in the blank: ____ is a control in Visual Studio suitable for displaying tabular data.",
    correctAnswer: "DataGridView",
    explanation:
      "DataGridView renders rows and columns of data, commonly bound to a DataSet, DataTable, or list of objects.",
    examSource: EXAM_2023,
    difficulty: "easy",
  },
  {
    id: "w-009",
    moduleId: "winforms-controls",
    type: "mcq",
    prompt:
      "Which one of the following is NOT a Visual Basic / .NET control-flow structure?",
    options: ["If...Then", "Switch...Case", "For...Next", "Do...Loop"],
    correctAnswer: "Switch...Case",
    explanation:
      "VB.NET uses Select Case rather than the C-style switch...case keyword pair.",
    examSource: EXAM_2023,
    difficulty: "medium",
  },
  {
    id: "w-010",
    moduleId: "winforms-controls",
    type: "mcq",
    prompt:
      'Given: Dim course() As String = {"Math", "DBI", "AI"} — which statement correctly updates the element "DBI" to "DBII"?',
    options: [
      "Course(update) = DBII",
      "Course.Add(DBII)",
      "Course(2) = DBII",
      "Course(1) = DBII",
    ],
    correctAnswer: "Course(1) = DBII",
    explanation:
      'Arrays are zero-indexed: Math is index 0, DBI is index 1, AI is index 2 — so Course(1) targets "DBI".',
    examSource: EXAM_2023,
    difficulty: "medium",
  },
  {
    id: "w-011",
    moduleId: "winforms-controls",
    type: "fillblank",
    prompt:
      "Trace the output: given TextBox1.Text = (4 + 2) ^ (3 \\ 4) in VB.NET (^ is exponent, \\ is integer division), what value is assigned to TextBox1?",
    correctAnswer: "1",
    explanation:
      "3 \\ 4 performs integer division and truncates to 0, so the expression becomes (4+2)^0 = 6^0 = 1.",
    examSource: EXAM_2023,
    difficulty: "hard",
  },
  {
    id: "w-012",
    moduleId: "winforms-controls",
    type: "fillblank",
    prompt:
      "Write the statement to erase the content from a control named TextBox1.",
    correctAnswer: 'TextBox1.Text = ""',
    explanation:
      "Assigning an empty string to Text clears a TextBox's displayed content (TextBox1.Clear() is an equivalent method call).",
    examSource: EXAM_2023,
    difficulty: "easy",
  },
  {
    id: "w-013",
    moduleId: "winforms-controls",
    type: "fillblank",
    prompt:
      "Write the statement to change the TextBox1 control so its content is read-only.",
    correctAnswer: "TextBox1.ReadOnly = true",
    explanation:
      "Setting the ReadOnly property to true still shows the text but prevents user edits.",
    examSource: EXAM_2023,
    difficulty: "easy",
  },

  // ---------------- exception-validation ----------------
  {
    id: "e-001",
    moduleId: "exception-validation",
    type: "truefalse",
    prompt: "Logical errors abort program execution.",
    correctAnswer: "False",
    explanation:
      "A logical error lets the program keep running — it just produces incorrect results, unlike a crash or an unhandled runtime exception.",
    examSource: EXAM_2023,
    difficulty: "easy",
  },
  {
    id: "e-002",
    moduleId: "exception-validation",
    type: "mcq",
    prompt:
      "Which C# keyword contains code that always executes, whether or not an exception occurred?",
    options: ["try", "catch", "finally", "throw"],
    correctAnswer: "finally",
    explanation:
      "finally is the ideal place to release resources (close files, connections) regardless of the try block's outcome.",
    difficulty: "easy",
  },
  {
    id: "e-003",
    moduleId: "exception-validation",
    type: "mcq",
    prompt:
      "In C#'s exception class hierarchy, which base class do all exceptions ultimately derive from?",
    options: ["SystemException", "ApplicationException", "Exception", "Error"],
    correctAnswer: "Exception",
    explanation:
      "Exception is the root; ApplicationException and SystemException are its two main direct branches.",
    difficulty: "medium",
  },
  {
    id: "e-004",
    moduleId: "exception-validation",
    type: "mcq",
    prompt:
      "Which exception type does accessing arr[10] on an array with only 5 elements throw?",
    options: [
      "NullReferenceException",
      "IndexOutOfRangeException",
      "FormatException",
      "OverflowException",
    ],
    correctAnswer: "IndexOutOfRangeException",
    explanation:
      "IndexOutOfRangeException fires when an index is outside the valid bounds (0 through Length-1) of an array.",
    difficulty: "easy",
  },
  {
    id: "e-005",
    moduleId: "exception-validation",
    type: "mcq",
    prompt:
      "In a checked arithmetic context, what happens if an operation overflows the target type's range?",
    options: [
      "The result silently wraps around",
      "An OverflowException is thrown",
      "The program terminates immediately with no message",
      "The value is automatically converted to double",
    ],
    correctAnswer: "An OverflowException is thrown",
    explanation:
      "checked(...) makes the CLR detect and throw on overflow; unchecked(...) truncates the result instead.",
    difficulty: "medium",
  },
  {
    id: "e-006",
    moduleId: "exception-validation",
    type: "mcq",
    prompt:
      "A custom exception class intended for application-specific errors should typically derive from:",
    options: [
      "SystemException",
      "ApplicationException",
      "IOException",
      "Exception directly, never a subclass",
    ],
    correctAnswer: "ApplicationException",
    explanation:
      "Programmer-defined exceptions conventionally derive from ApplicationException, are named ending in 'Exception', and define three standard constructors.",
    difficulty: "medium",
  },
  {
    id: "e-007",
    moduleId: "exception-validation",
    type: "mcq",
    prompt:
      "Which component displays an error icon and tooltip next to an invalid Windows Forms control?",
    options: ["MessageBox", "ErrorProvider", "ToolTip", "StatusStrip"],
    correctAnswer: "ErrorProvider",
    explanation:
      "ErrorProvider1.SetError(control, message) attaches a blinking error icon with the given message to the control.",
    difficulty: "medium",
  },
  {
    id: "e-008",
    moduleId: "exception-validation",
    type: "mcq",
    prompt: "The Validating event on a Windows Forms control fires:",
    options: [
      "Before the control loses focus, after Leave and before Validated",
      "After the form loads, before any user input",
      "Only when the application closes",
      "Every time the control is repainted",
    ],
    correctAnswer:
      "Before the control loses focus, after Leave and before Validated",
    explanation:
      "This event ordering (Leave -> Validating -> Validated -> LostFocus) is what lets you validate and optionally cancel a focus change.",
    difficulty: "hard",
  },

  // ---------------- file-database ----------------
  {
    id: "fd-001",
    moduleId: "file-database",
    type: "mcq",
    prompt:
      "Which class is the base class for all I/O operations across different sources in .NET (files, memory, network)?",
    options: [
      "System.IO.Stream",
      "System.IO.FileStream",
      "System.IO.MemoryStream",
      "System.IO.NetworkStream",
    ],
    correctAnswer: "System.IO.Stream",
    explanation:
      "Stream is the abstract base; FileStream, MemoryStream, and NetworkStream are all specialized implementations of it.",
    examSource: EXAM_2025,
    difficulty: "medium",
  },
  {
    id: "fd-002",
    moduleId: "file-database",
    type: "fillblank",
    prompt:
      "Fill in the blank: The ____ enumeration defines the various modes for opening a file (e.g. Create, Open, Append).",
    correctAnswer: "FileMode",
    explanation:
      "FileMode values (Append, Create, CreateNew, Open, OpenOrCreate, Truncate) control how a FileStream opens its target file.",
    examSource: EXAM_2025,
    difficulty: "medium",
  },
  {
    id: "fd-003",
    moduleId: "file-database",
    type: "mcq",
    prompt:
      "Which FileMode value creates a new file, but throws an exception if the file already exists?",
    options: ["Create", "CreateNew", "OpenOrCreate", "Truncate"],
    correctAnswer: "CreateNew",
    explanation:
      "CreateNew guarantees a brand-new file; Create silently overwrites an existing one instead of throwing.",
    difficulty: "medium",
  },
  {
    id: "fd-004",
    moduleId: "file-database",
    type: "mcq",
    prompt:
      "Which class reads a stream of characters, one line at a time, from a text file?",
    options: ["BinaryReader", "StreamReader", "FileInfo", "MemoryStream"],
    correctAnswer: "StreamReader",
    explanation:
      "StreamReader.ReadLine() reads successive lines of text; BinaryReader is for binary (non-text) data instead.",
    difficulty: "easy",
  },
  {
    id: "fd-005",
    moduleId: "file-database",
    type: "mcq",
    prompt:
      "Which exception is thrown when part of a directory or file path cannot be found?",
    options: [
      "FileNotFoundException",
      "DirectoryNotFoundException",
      "EndOfStreamException",
      "IOException",
    ],
    correctAnswer: "DirectoryNotFoundException",
    explanation:
      "FileNotFoundException means the directory exists but the file itself is missing; DirectoryNotFoundException means part of the path itself doesn't exist.",
    difficulty: "medium",
  },
  {
    id: "fd-006",
    moduleId: "file-database",
    type: "mcq",
    prompt:
      "Which ADO.NET object is responsible for filling a disconnected DataSet from a data source and writing changes back?",
    options: ["DataReader", "DataAdapter", "DataView", "Command"],
    correctAnswer: "DataAdapter",
    explanation:
      "The DataAdapter bridges a Command/Connection and a DataSet, performing Fill() to load data and Update() to persist changes.",
    difficulty: "medium",
  },
  {
    id: "fd-007",
    moduleId: "file-database",
    type: "mcq",
    prompt:
      "Which static File class method copies a file from a source path to a destination path?",
    options: [
      "File.Move(source, dest)",
      "File.Copy(source, dest)",
      "File.Clone(source, dest)",
      "File.Duplicate(source, dest)",
    ],
    correctAnswer: "File.Copy(source, dest)",
    explanation:
      "File.Copy duplicates the file content at dest; File.Move relocates the original instead of duplicating it.",
    difficulty: "easy",
  },

  // ---------------- wpf-databinding ----------------
  {
    id: "wp-001",
    moduleId: "wpf-databinding",
    type: "mcq",
    prompt:
      "What markup language is used to declaratively describe a WPF user interface?",
    options: ["HTML", "XAML", "JSON", "CSS"],
    correctAnswer: "XAML",
    explanation:
      "XAML (Extensible Application Markup Language) is the XML-based markup WPF uses to declare UI layout and controls, separate from the C# code-behind.",
    difficulty: "easy",
  },
  {
    id: "wp-002",
    moduleId: "wpf-databinding",
    type: "mcq",
    prompt:
      "Which binding Mode keeps a bound source property and a UI control's property synchronized in both directions?",
    options: ["OneWay", "OneTime", "TwoWay", "OneWayToSource"],
    correctAnswer: "TwoWay",
    explanation:
      "TwoWay binding is typical for editable form fields: edits in the UI update the source, and source changes update the UI.",
    difficulty: "medium",
  },
  {
    id: "wp-003",
    moduleId: "wpf-databinding",
    type: "mcq",
    prompt:
      "Which interface should a bound class implement so the UI automatically refreshes when a property changes in code?",
    options: [
      "IEnumerable",
      "IDisposable",
      "INotifyPropertyChanged",
      "IComparable",
    ],
    correctAnswer: "INotifyPropertyChanged",
    explanation:
      "Raising the PropertyChanged event from a property's setter tells any two-way bindings to refresh the UI immediately.",
    difficulty: "medium",
  },
  {
    id: "wp-004",
    moduleId: "wpf-databinding",
    type: "mcq",
    prompt:
      "Which of these is a WPF layout panel (as opposed to a Windows Forms concept)?",
    options: ["DockStyle", "Anchor", "StackPanel", "AutoScroll"],
    correctAnswer: "StackPanel",
    explanation:
      "WPF arranges children with panels like Grid, StackPanel, and DockPanel; Windows Forms instead uses Dock/Anchor properties on individual controls.",
    difficulty: "easy",
  },

  // ---------------- async-tasks ----------------
  {
    id: "a-001",
    moduleId: "async-tasks",
    type: "mcq",
    prompt: "Why is asynchronous programming important in a GUI application?",
    options: [
      "It makes the compiled program smaller",
      "It prevents long-running operations from freezing the UI thread",
      "It removes the need for exception handling",
      "It is required to declare any class",
    ],
    correctAnswer:
      "It prevents long-running operations from freezing the UI thread",
    explanation:
      "Event handlers run on the single UI thread; awaiting long operations frees that thread to keep the interface responsive.",
    difficulty: "easy",
  },
  {
    id: "a-002",
    moduleId: "async-tasks",
    type: "mcq",
    prompt: "What does the await keyword do inside an async method?",
    options: [
      "Blocks the current thread until the task finishes",
      "Suspends the method until the awaited Task completes, without blocking the calling thread",
      "Cancels the awaited Task",
      "Immediately throws if the Task hasn't completed yet",
    ],
    correctAnswer:
      "Suspends the method until the awaited Task completes, without blocking the calling thread",
    explanation:
      "await yields control back to the caller (e.g. the UI message loop) and resumes the method once the Task completes.",
    difficulty: "medium",
  },
  {
    id: "a-003",
    moduleId: "async-tasks",
    type: "mcq",
    prompt:
      "What is the type of a Task-returning async method's result when the method is declared as async Task<int>?",
    options: ["void", "int", "Task", "Task<int> awaited to an int"],
    correctAnswer: "Task<int> awaited to an int",
    explanation:
      "The method itself returns Task<int>; callers use await to unwrap that Task and obtain the underlying int.",
    difficulty: "medium",
  },
  {
    id: "a-004",
    moduleId: "async-tasks",
    type: "mcq",
    prompt: "Which of these is a common async pitfall?",
    options: [
      "Using try/catch around an await expression",
      "Blocking on async code with .Result or .Wait() on the UI thread, risking a deadlock",
      "Declaring a method as async Task",
      "Using Task.WhenAll to wait for multiple tasks",
    ],
    correctAnswer:
      "Blocking on async code with .Result or .Wait() on the UI thread, risking a deadlock",
    explanation:
      "Synchronously blocking on a Task from the UI thread can deadlock because the continuation may need that same thread to resume.",
    difficulty: "hard",
  },
];

export function getQuestionsByModule(moduleId: string) {
  return questions.filter((q) => q.moduleId === moduleId);
}

export function getQuestionById(id: string) {
  return questions.find((q) => q.id === id);
}
