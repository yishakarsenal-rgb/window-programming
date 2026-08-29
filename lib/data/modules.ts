import type { Module } from "@/lib/types"

export const modules: Module[] = [
  {
    id: "fundamentals",
    order: 1,
    title: "Fundamentals of Event-Driven Programming",
    shortTitle: "Fundamentals of EDP",
    description: "Window programming concepts, methodologies, events, and the .NET Framework.",
    sections: [
      {
        heading: "Window Programming",
        paragraphs: [
          "Window programming involves creating software applications that run on the Microsoft Windows OS. It rests on a few core ideas:",
        ],
        bullets: [
          "Window API — the core set of application programming interfaces for Windows that let a program interact with the OS, manage windows, and handle input.",
          "Event-driven programming — programming whose flow is determined by events (user actions).",
          "Message loop — a loop that retrieves messages from a queue and dispatches them to the appropriate window procedure.",
          "File I/O — reading from and writing to files.",
        ],
      },
      {
        heading: "Software Development Methodologies",
        paragraphs: ["Structured approaches to planning, executing, and managing software projects."],
        bullets: [
          "Waterfall — linear, sequential phases (Requirements → Design → Implementation → Verification → Maintenance). Simple, well-documented, but inflexible to change; does not incorporate user feedback during development.",
          "Agile — iterative and incremental, with sprints, stand-ups, and retrospectives. Adaptable but requires constant communication.",
          "Prototyping — build a working model to clarify requirements; throwaway prototypes are discarded once requirements are clear. Requires user involvement.",
          "Spiral Model — risk-driven, combines iterative development with Waterfall's systematic structure; allows refinement from user feedback but is complex and costly.",
          "Rapid Application Development (RAD) — emphasizes fast prototyping and iteration over rigorous planning. Best for small-to-medium, low-complexity, time-sensitive projects with well-understood requirements and adequate budget.",
        ],
      },
      {
        heading: "Event-Driven Programming Concepts",
        bullets: [
          "Event Source — an object that generates events (e.g., a button that raises a click event).",
          "Event — an individual user action or occurrence the program can detect and handle (mouse click, key press, system notification).",
          "Event Listener — waits for a specific event on the event source and triggers the corresponding handler.",
          "Event Handler — the method that executes in response to an event, containing the response logic.",
        ],
        paragraphs: [
          "The central element of an event-driven application is a scheduler/listener that receives a stream of events and dispatches each one to the relevant handler. It stays active until it encounters a terminating event (e.g., End_Program).",
        ],
        code: {
          label: "Event loop pseudocode",
          lang: "text",
          content: `do forever:            // the main scheduler loop
    get event from input stream
    if event type == EndProgram:
        quit
    else if event type == event_01:
        call handler for event_01
    else if event type == event_02:
        call handler for event_02
    ...
    else: handle unrecognized event
end loop`,
        },
      },
      {
        heading: "Introduction to the .NET Framework",
        paragraphs: [
          ".NET is a software framework, primarily for Microsoft Windows, that provides a common platform to execute applications written in many different languages. Microsoft announced the .NET initiative in July 2000 to bridge interoperability gaps between languages.",
          "The .NET Framework consists of three core pieces:",
        ],
        bullets: [
          "Common Language Specification (CLS) — guidelines that let different .NET languages interoperate; responsible for type matching and cross-language integration.",
          "Framework Base Class Library (BCL/FCL) — a consistent, object-oriented library of reusable types for building command-line, GUI, ASP.NET, and mobile applications.",
          "Common Language Runtime (CLR) — a language-neutral execution environment: common runtime, type safety, memory allocation and garbage collection, and IL-to-native compilation.",
        ],
      },
      {
        heading: "Compilation Model: C# vs Java",
        table: {
          headers: ["Step", "Java", "C#"],
          rows: [
            ["Source", "Hello.java", "Hello.cs"],
            ["Compile", "javac → Byte code", "csc → CIL"],
            ["Execute", "JVM", "CLR"],
          ],
        },
      },
      {
        heading: "ADO.NET",
        paragraphs: [
          "ADO.NET is a set of classes in the .NET Framework that expose data-access services, bridging front-end applications and back-end data sources such as databases and XML. Unlike the older ADO (which used RecordSet), ADO.NET is built around the DataSet object, which can hold multiple tables.",
        ],
        bullets: [
          "Connection — connects to a backend database (SQL Server, Oracle, MySQL, ...).",
          "Command — builds and executes SQL statements over a connection.",
          "DataReader — read-only, forward-only, connected access to rows.",
          "DataSet — a disconnected, browsable-in-both-directions cache of data; supports insert/update/delete.",
          "DataAdapter — fills a DataSet from a data source and writes changes back.",
          "DataView — customizes the sort order and filtering of a DataTable's appearance.",
        ],
      },
      {
        heading: "LINQ (Language Integrated Query)",
        paragraphs: [
          "LINQ lets you write queries directly in C# using syntax integrated into the language. To be queryable with LINQ, a class must implement IEnumerable (simple iteration) or IQueryable (translatable queries, e.g. to SQL).",
          "A typical query pipeline follows: SELECT → FROM → WHERE → OUTER (join). LINQ can target object collections, XML documents, and databases via the Entity Framework.",
        ],
      },
      {
        heading: "Mono Framework",
        paragraphs: [
          "Mono is an open-source implementation of the .NET Framework that lets .NET applications run on multiple operating systems, including Linux and macOS — enabling cross-platform compatibility for code originally written for Windows-only .NET.",
        ],
      },
    ],
  },
  {
    id: "csharp-syntax",
    order: 2,
    title: "C# Syntax & Data Types",
    shortTitle: "C# Syntax",
    description: "Variables, data types, casting, operators, and expressions in C#.",
    sections: [
      {
        heading: "What Is C#?",
        paragraphs: [
          "C# (pronounced 'see sharp') is a simple, modern, type-safe, object-oriented language developed by Microsoft that runs on the .NET Framework. It combines the best features of Visual Basic, C++, and Java, and compiles to managed code.",
        ],
      },
      {
        heading: "Value Types vs Reference Types",
        bullets: [
          "Value types store their own data directly on the stack; each variable has its own copy (int, double, bool, char, struct, ...).",
          "Reference types store a reference (address) to data on the heap; multiple variables can point to the same object (string, object, arrays, classes).",
          "Value types cannot be null unless declared nullable (int?); reference types can be null by default.",
        ],
      },
      {
        heading: "Built-in Data Types",
        table: {
          headers: ["Keyword", "Bytes", ".NET Type", "Default", "Range"],
          rows: [
            ["sbyte", "1", "SByte", "0", "-128 to 127"],
            ["byte", "1", "Byte", "0", "0 to 255"],
            ["short", "2", "Int16", "0", "-32768 to 32767"],
            ["int", "4", "Int32", "0", "-2,147,483,648 to 2,147,483,647"],
            ["long", "8", "Int64", "0L", "±9.2×10^18"],
            ["float", "4", "Single", "0.0f", "±3.4×10^38"],
            ["double", "8", "Double", "0.0d", "±1.7×10^308"],
            ["decimal", "16", "Decimal", "0.0m", "±7.9×10^28"],
            ["bool", "1", "Boolean", "false", "true / false"],
            ["char", "2", "Char", "'\\u0000'", "single Unicode character"],
            ["string", "-", "String", "null", "reference to text"],
            ["object", "-", "Object", "null", "parent of all types"],
          ],
        },
      },
      {
        heading: "Variables & Naming",
        paragraphs: [
          "A variable is a named area of memory that stores a value of a particular type and is accessible by its name. It must be declared before use with a data type, a name, and (optionally) an initial value.",
        ],
        bullets: [
          "Names start with a letter or underscore, may contain digits and underscores, and cannot clash with a keyword unless prefixed with @ (e.g. @char).",
          "C# is case-sensitive.",
          "camelCase is conventional for local variables/parameters (letterGrade); PascalCase for types and members (LetterGrade).",
        ],
        code: {
          label: "Declaration & initialization",
          lang: "csharp",
          content: `int num = new int();          // num = 0
int x;                        // declaration
x = 0;                        // assignment
char grade = 'A';
double price = 10.55;
decimal salary = 12345.67m;    // m/M suffix => decimal
float interestRate = 5.25f;    // f/F suffix => float
bool isValid = false;
string greeting = "Hello World!";`,
        },
      },
      {
        heading: "Constants & Nullable Types",
        code: {
          label: "const and nullable examples",
          lang: "csharp",
          content: `const double Pension = 0.06;
const int DaysInWeek = 7;

int? someInteger = null;   // Nullable<int>
someInteger = 5;

double? someDouble = null;
someDouble = 2.5;`,
        },
        paragraphs: [
          "A constant's value cannot change after it is declared and initialized in a single statement. Nullable types (Nullable<T> or T?) wrap a value type so it can also hold null — useful when a value may legitimately be 'unknown'.",
        ],
      },
      {
        heading: "Type Casting",
        bullets: [
          "Implicit casting — automatic, widening conversion from a less precise to a more precise type (byte → short → int → long → decimal).",
          "Explicit casting — narrowing conversion using (type) expression syntax; may lose precision or throw, e.g. int mark = (int)85.25;",
        ],
        code: {
          lang: "csharp",
          content: `double mark = 85;          // implicit: int -> double
int rounded = (int)85.25;  // explicit: double -> int (truncates to 85)`,
        },
      },
      {
        heading: "Converting Between Types",
        bullets: [
          "ToString([format]) — converts a value to its string representation.",
          "Parse(string) — converts a string to a value type; throws an exception if the string cannot be converted.",
          "TryParse(string, out value) — like Parse but returns true/false instead of throwing.",
          "Convert.ToInt32 / ToDouble / ToDecimal(...) — static helper conversions.",
        ],
        code: {
          lang: "csharp",
          content: `decimal salary = 2453.32m;
string salaryString = salary.ToString();
salary = Decimal.Parse(salaryString);
Decimal.TryParse(salaryString, out salary);

string monthlyAmount = salary.ToString("c");   // currency: $2,453.32
string interestRate = (0.023m).ToString("p1");  // percent: 2.3%
string quantityString = (15000).ToString("n0"); // number: 15,000`,
        },
      },
      {
        heading: "Operators",
        paragraphs: ["Operators take one, two, or three operands and produce a value; they have precedence, and parentheses always bind first."],
        bullets: [
          "Arithmetic: + - * / % ++ --  (integer / truncates; % is remainder)",
          "Logical: && || ^ !  (AND, OR, XOR, NOT on booleans)",
          "Bitwise: | & ^ ~ << >>  (operate bit-by-bit on integers)",
          "Comparison: == != < > <= >=",
          "Assignment: = += -= *= /= |= ...",
        ],
        code: {
          label: "Worked examples",
          lang: "csharp",
          content: `int a = 5, b = 4;
Console.WriteLine(a + b++);   // 9  (post-increment used, then b becomes 5)
Console.WriteLine(a + b);     // 10
Console.WriteLine(11 / 3);    // 3  (integer division truncates)
Console.WriteLine(11 % 3);    // 2

bool p = true, q = false;
Console.WriteLine(p && q);    // False
Console.WriteLine(p ^ q);     // True (exclusive or)`,
        },
      },
    ],
  },
  {
    id: "oop",
    order: 3,
    title: "Object-Oriented Programming in C#",
    shortTitle: "OOP",
    description: "Classes, objects, properties, inheritance, interfaces, and generics.",
    sections: [
      {
        heading: "Objects & Classes",
        paragraphs: [
          "Software objects model real-world entities or abstract concepts. Real-world objects have state (data) and behavior (actions): a bank Account has a holder, balance, and type (state), and can withdraw, deposit, and suspend (behavior).",
          "A class is a template that defines the attributes, methods, and events an object created from it will have. An object is an instance of a class, created with the new keyword.",
        ],
        code: {
          label: "Simple class",
          lang: "csharp",
          content: `public class Cat
{
    private string name;
    public Cat(string name) { this.name = name; }

    public string Name
    {
        get { return name; }
        set { name = value; }
    }

    public void SayMiau() => Console.WriteLine("Miauuuuuuu!");
}`,
        },
      },
      {
        heading: "Access Modifiers",
        table: {
          headers: ["Modifier", "Accessible from"],
          rows: [
            ["public", "any class, anywhere"],
            ["protected", "the class itself and its descendants"],
            ["private", "the class itself only"],
            ["internal", "the current assembly only (default)"],
          ],
        },
      },
      {
        heading: "Fields & Properties",
        paragraphs: [
          "Fields are data members (variables/constants); accessing one doesn't execute any code. Properties look like fields but can run code on access — usually get/set accessors that wrap a private field. According to which accessors are implemented, a property can be read-only, write-only, or read-write.",
        ],
        code: {
          lang: "csharp",
          content: `public class Point
{
    private int xCoord;
    public int XCoord
    {
        get { return xCoord; }
        set { xCoord = value; }
    }
}`,
        },
      },
      {
        heading: "Static vs Instance Members",
        bullets: [
          "Instance members belong to a specific object — e.g. each Dog has its own name.",
          "Static members are shared by all instances of a class — e.g. DateTime.MinValue.",
          "Static members are initialized before the type is first used; instance members are initialized when the constructor runs.",
        ],
      },
      {
        heading: "Method Overloading vs Overriding",
        bullets: [
          "Overloading — multiple methods with the same name but different parameter signatures (same class).",
          "Overriding — a subclass changes the behavior of a base method marked virtual, using the override keyword; base.MethodName() calls the base implementation.",
        ],
        code: {
          lang: "csharp",
          content: `class BaseClass
{
    public virtual void DoSomething() => Console.WriteLine("Base says hi!");
}
class SubClass : BaseClass
{
    public override void DoSomething()
    {
        base.DoSomething();
        Console.WriteLine("Sub says hi!");
    }
}`,
        },
      },
      {
        heading: "Abstract & Sealed Classes",
        bullets: [
          "abstract class — cannot be instantiated directly; must be subclassed. Abstract members must be overridden by the derived class.",
          "sealed class — the opposite: prevents further subclasses from being derived. A sealed method cannot be overridden.",
        ],
        code: {
          lang: "csharp",
          content: `abstract class Shape
{
    public abstract double Area();
}
class Circle : Shape
{
    public double Radius;
    public override double Area() => Math.PI * Radius * Radius;
}`,
        },
      },
      {
        heading: "Interfaces",
        paragraphs: [
          "An interface defines a contract — the 'what' — that implementing classes must fulfil with their own 'how'. A class can implement multiple interfaces.",
        ],
        code: {
          lang: "csharp",
          content: `public interface IShape
{
    double CalculateArea(double w, double l);
}
public class Rectangle : IShape
{
    public double CalculateArea(double w, double l) => w * l;
}`,
        },
      },
      {
        heading: "Constructors",
        paragraphs: [
          "A constructor is a method with the class's name, invoked via new. If you don't write one, the compiler supplies a public, parameterless default constructor. A class can define multiple constructors as long as each has a distinct parameter signature (overloading).",
        ],
      },
      {
        heading: "Generics",
        paragraphs: [
          "Generics let you define classes/methods parameterized by a type, so the same class works with different data types safely: List<int>, List<string>, List<Student> are all instantiations of the generic List<T>.",
        ],
      },
    ],
  },
  {
    id: "delegates-events",
    order: 4,
    title: "Methods, Delegates & Events",
    shortTitle: "Delegates & Events",
    description: "Method parameters, delegates as typed function references, and the event pattern.",
    sections: [
      {
        heading: "Methods",
        paragraphs: [
          "A method is a named, callable block of code that can take parameters and return a value. Methods make programs manageable: they split large problems into small pieces, avoid repeated code, and improve readability and maintainability.",
        ],
        code: {
          lang: "csharp",
          content: `public double CalculateGpa(double totalGradePoint, int totalCredit)
{
    return totalGradePoint / totalCredit;
}
double cgpa = CalculateGpa(92.23, 36);`,
        },
      },
      {
        heading: "Optional & Named Parameters",
        code: {
          lang: "csharp",
          content: `void PrintNumbers(int start = 0, int end = 100)
{
    for (int i = start; i <= end; i++) Console.Write("{0} ", i);
}
PrintNumbers(5, 10);
PrintNumbers(15);
PrintNumbers();
PrintNumbers(end: 40, start: 35);   // named parameters`,
        },
        paragraphs: [
          "Once you define an optional parameter, every parameter after it must also be optional. If you pass a value positionally to an optional parameter, you must supply values for every parameter before it.",
        ],
      },
      {
        heading: "Variable Parameter Lists (params)",
        code: {
          lang: "csharp",
          content: `static int AddNumbers(params int[] nums)
{
    int total = 0;
    foreach (int x in nums) total += x;
    return total;
}`,
        },
      },
      {
        heading: "Passing by Value vs Reference",
        bullets: [
          "By value (default) — a copy is passed; changes inside the method don't affect the caller's variable.",
          "ref — passes a reference; the argument must already be initialized. Changes made inside the method are visible to the caller.",
          "out — like ref, but the argument need not be initialized first; used to return extra values through parameters.",
        ],
        code: {
          lang: "csharp",
          content: `static void SquareAndRoot(double num, out double sq, out double sqrt)
{
    sq = num * num;
    sqrt = Math.Sqrt(num);
}
double theSquare, theRoot;
SquareAndRoot(9.0, out theSquare, out theRoot);`,
        },
      },
      {
        heading: "Delegates",
        paragraphs: [
          "A delegate is a reference-type variable that holds a reference to a method with a matching signature. The method it points to can be changed at runtime — this is what makes event handling possible.",
        ],
        code: {
          lang: "csharp",
          content: `public delegate int NumberFunction(int x);

static int Square(int num) => num * num;
static int Cube(int num) => num * num * num;

NumberFunction f = Square;
Console.WriteLine(f(5));  // 25
f = Cube;
Console.WriteLine(f(5));  // 125`,
        },
      },
      {
        heading: "Events",
        paragraphs: [
          "Events are user actions (clicks, key presses) or occurrences (system notifications) that the application responds to. In C#, an event is declared with a delegate type and the event keyword; subscribers attach handler methods with +=.",
        ],
        code: {
          lang: "csharp",
          content: `public delegate void MyEventHandler(string newValue);

class EventExample
{
    public event MyEventHandler ValueChanged;
    private string theValue;
    public string Val
    {
        set { theValue = value; ValueChanged?.Invoke(theValue); }
    }
}

var myEvt = new EventExample();
myEvt.ValueChanged += (v) => Console.WriteLine($"The value changed to {v}");
myEvt.Val = "hello";`,
        },
      },
      {
        heading: "Wiring a Control's Click Event",
        code: {
          lang: "csharp",
          content: `FileMenu.Click += new System.EventHandler(this.FileMenuItemClick);

private void FileMenuItemClick(object sender, EventArgs e)
{
    MessageBox.Show("File menu item clicked");
}`,
        },
      },
    ],
  },
  {
    id: "winforms-controls",
    order: 5,
    title: "GUI / Windows Forms Controls",
    shortTitle: "WinForms Controls",
    description: "MenuStrip, StatusBar, common dialogs, and building blocks of a GUI application.",
    sections: [
      {
        heading: "MenuStrip Control",
        paragraphs: [
          "Displays application commands grouped by functionality. Can be created at design time (drag from Toolbox) or dynamically at run time.",
        ],
        code: {
          label: "Creating a MenuStrip at run time",
          lang: "csharp",
          content: `MenuStrip mainMenu = new MenuStrip();
mainMenu.BackColor = Color.OrangeRed;
mainMenu.Dock = DockStyle.Top;

ToolStripMenuItem fileMenu = new ToolStripMenuItem("File");
fileMenu.Click += new System.EventHandler(this.FileMenuItemClick);
mainMenu.Items.Add(fileMenu);

this.MainMenuStrip = mainMenu;
Controls.Add(mainMenu);`,
        },
      },
      {
        heading: "StatusBar Control",
        paragraphs: [
          "A StatusBar is a combination of panels, each of which can show different information (e.g. app status vs. the current date). Typically docked at the bottom of a form.",
        ],
        code: {
          lang: "csharp",
          content: `protected StatusBar mainStatusBar = new StatusBar();
protected StatusBarPanel statusPanel = new StatusBarPanel();

statusPanel.Text = "Application started.";
mainStatusBar.Panels.Add(statusPanel);
mainStatusBar.ShowPanels = true;
this.Controls.Add(mainStatusBar);`,
        },
      },
      {
        heading: "ColorDialog",
        paragraphs: [
          "Lets a user pick a predefined or custom color. AllowFullOpen controls whether 'Define Custom Colors' is available; AnyColor/SolidColorOnly restrict the palette.",
        ],
        code: {
          lang: "csharp",
          content: `ColorDialog colorDlg = new ColorDialog();
colorDlg.AllowFullOpen = false;
colorDlg.AnyColor = true;
if (colorDlg.ShowDialog() == DialogResult.OK)
{
    textBox1.ForeColor = colorDlg.Color;
}`,
        },
      },
      {
        heading: "FontDialog",
        code: {
          lang: "csharp",
          content: `FontDialog fontDlg = new FontDialog();
fontDlg.ShowColor = true;
fontDlg.MaxSize = 40;
fontDlg.MinSize = 22;
if (fontDlg.ShowDialog() != DialogResult.Cancel)
{
    textBox1.Font = fontDlg.Font;
    textBox1.BackColor = fontDlg.Color;
}`,
        },
      },
      {
        heading: "OpenFileDialog & SaveFileDialog",
        code: {
          lang: "csharp",
          content: `OpenFileDialog dialog = new OpenFileDialog();
dialog.Filter = "txt files (*.txt)|*.txt|All files (*.*)|*.*";
dialog.InitialDirectory = "C:";
if (dialog.ShowDialog() == DialogResult.OK)
    strFileName = dialog.FileName;

SaveFileDialog saveDlg = new SaveFileDialog();
saveDlg.DefaultExt = "txt";
saveDlg.Filter = "Text files (*.txt)|*.txt|All files (*.*)|*.*";
if (saveDlg.ShowDialog() == DialogResult.OK)
    textBox1.Text = saveDlg.FileName;`,
        },
      },
      {
        heading: "PrintDialog",
        code: {
          lang: "csharp",
          content: `PrintDialog printDlg = new PrintDialog();
PrintDocument printDoc = new PrintDocument();
printDlg.Document = printDoc;
if (printDlg.ShowDialog() == DialogResult.OK)
    printDoc.Print();`,
        },
      },
      {
        heading: "Passing Data Between Forms",
        code: {
          lang: "csharp",
          content: `// Form1.cs
private void btnOpenForm2_Click(object sender, EventArgs e)
{
    string dataToPass = txtData.Text;
    Form2 form2 = new Form2(dataToPass);
    form2.Show();
}

// Form2.cs
public Form2(string receivedData)
{
    InitializeComponent();
    lblData.Text = receivedData;
}`,
        },
      },
    ],
  },
  {
    id: "exception-validation",
    order: 6,
    title: "Exception Handling & Data Validation",
    shortTitle: "Exceptions",
    description: "try/catch/finally, the .NET exception hierarchy, custom exceptions, and validating user input.",
    sections: [
      {
        heading: "Errors vs Exceptions",
        bullets: [
          "Syntax errors — language rule violations, caught by the IDE before running.",
          "Run-time / logic errors — the program runs but produces incorrect results (e.g. an off-by-one loop, missing business logic).",
          "Exception — an indication of a problem during execution that the program can potentially resolve and continue from.",
        ],
      },
      {
        heading: "try / catch / finally",
        code: {
          lang: "csharp",
          content: `try
{
    mark = Convert.ToDouble(txtTotalMark.Text);
}
catch (OverflowException)
{
    MessageBox.Show("Overflow exception.");
}
catch (FormatException)
{
    MessageBox.Show("Format exception occurred.");
}
catch (Exception)
{
    MessageBox.Show("General exception.");
}
finally
{
    // always runs — ideal place to release resources
}`,
        },
        bullets: [
          "try — wraps code that might throw.",
          "catch — handles a specific exception type (or Exception for anything); the parameter-less catch must be last.",
          "finally — optional, but always executes; used to release resources (e.g. close a file) whether or not an exception occurred.",
        ],
      },
      {
        heading: ".NET Exception Hierarchy",
        paragraphs: [
          "All exceptions derive from the base class Exception.",
        ],
        bullets: [
          "ApplicationException — for programmer-defined, application-specific exceptions.",
          "SystemException — thrown by the CLR at runtime (e.g. IndexOutOfRangeException, FormatException, DivideByZeroException, NullReferenceException, OverflowException, StackOverflowException).",
        ],
      },
      {
        heading: "Throwing Exceptions",
        code: {
          lang: "csharp",
          content: `if (credit < 0)
{
    throw new Exception("Credit hour cannot be a negative value.");
}`,
        },
      },
      {
        heading: "Exception Properties",
        bullets: [
          "Message — the error text (default or custom).",
          "StackTrace — the sequence of method calls leading to the throw point.",
          "GetType() — the runtime type of the exception.",
          "InnerException — wraps an originally-caught exception when re-throwing a new type.",
        ],
      },
      {
        heading: "Programmer-Defined Exceptions",
        code: {
          lang: "csharp",
          content: `class NegativeNumberException : ApplicationException
{
    public NegativeNumberException()
        : base("Illegal operation for a negative number") { }
    public NegativeNumberException(string message) : base(message) { }
    public NegativeNumberException(string message, Exception inner)
        : base(message, inner) { }
}`,
        },
      },
      {
        heading: "checked / unchecked Contexts",
        paragraphs: [
          "Primitive types have a fixed size, so arithmetic can silently overflow. A checked context makes the CLR throw OverflowException when overflow occurs; an unchecked context truncates the result instead.",
        ],
        code: {
          lang: "csharp",
          content: `int number1 = int.MaxValue, number2 = int.MaxValue;
try
{
    int sum = checked(number1 + number2); // throws OverflowException
}
catch (OverflowException ex) { Console.WriteLine(ex.ToString()); }

int truncated = unchecked(number1 + number2); // wraps around silently`,
        },
      },
      {
        heading: "Validating User Input",
        bullets: [
          "Intrinsic validation — built-in control behavior that restricts entry (RadioButton, CheckBox, DateTimePicker, MaskedTextBox).",
          "Boolean functions — IsNumeric(...) / IsDate(...) to test input before using it.",
          "ErrorProvider component — shows an error icon/tooltip next to an invalid control via SetError(control, message).",
          "Focus control — TextBox1.Focus() and TextBox1.SelectAll() keep the user on the field with the error.",
          "Validating event — fires before a control loses focus (after Leave, before Validated); use CausesValidation to control it.",
        ],
      },
    ],
  },
  {
    id: "file-database",
    order: 7,
    title: "Files, Streams & ADO.NET Database",
    shortTitle: "Files & Database",
    description: "System.IO classes for files/directories, text and binary streams, and database access with ADO.NET.",
    sections: [
      {
        heading: "Directory, File & Path Classes",
        paragraphs: [
          "The System.IO namespace exposes static classes for managing the file system. Directory and File methods are static, so you call them directly on the class.",
        ],
        code: {
          lang: "csharp",
          content: `if (!Directory.Exists("c:\\\\testDir"))
    Directory.CreateDirectory("c:\\\\testDir");

if (!File.Exists("c:\\\\testFile.txt"))
    File.Create("c:\\\\testFile.txt");

string dir = Path.GetDirectoryName(@"C:\\SIS\\course.txt");
string name = Path.GetFileName(@"C:\\SIS\\course.txt");
string ext = Path.GetExtension(@"C:\\SIS\\course.txt");`,
        },
      },
      {
        heading: "Text vs Binary Files",
        paragraphs: [
          "In a text file, all data is stored as characters/strings (fields often separated by delimiters like tabs or pipes). In a binary file, data is stored in its native representation, which is more efficient for numeric data but isn't human-readable in a text editor. The .NET Framework models I/O as streams — flows of data between memory and a file.",
        ],
      },
      {
        heading: "FileStream & FileMode",
        code: {
          lang: "csharp",
          content: `FileStream fileWrite = new FileStream(path, FileMode.Create, FileAccess.Write);
FileStream fileRead  = new FileStream(path, FileMode.Open, FileAccess.Read);`,
        },
        table: {
          headers: ["FileMode", "Behavior"],
          rows: [
            ["Append", "Open and append; creates the file if it doesn't exist."],
            ["Create", "Create new; overwrites if it already exists."],
            ["CreateNew", "Create new; throws if the file already exists."],
            ["Open", "Open existing; throws if it doesn't exist."],
            ["OpenOrCreate", "Open if it exists, otherwise create."],
            ["Truncate", "Open existing and truncate to zero bytes."],
          ],
        },
      },
      {
        heading: "StreamWriter & StreamReader (Text)",
        code: {
          lang: "csharp",
          content: `StreamWriter fWriter = new StreamWriter(new FileStream(path, FileMode.Create, FileAccess.Write));
fWriter.WriteLine(course.Code + "|" + course.Title + "|" + course.Credit);
fWriter.Close();

StreamReader fReader = new StreamReader(new FileStream(path, FileMode.OpenOrCreate, FileAccess.Read));
while (fReader.Peek() != -1)
{
    string row = fReader.ReadLine();
    string[] cols = row.Split('|');
}
fReader.Close();`,
        },
      },
      {
        heading: "BinaryWriter & BinaryReader",
        code: {
          lang: "csharp",
          content: `BinaryWriter bWrite = new BinaryWriter(new FileStream(path, FileMode.Create, FileAccess.Write));
bWrite.Write(course.Code);
bWrite.Write(course.Credit);
bWrite.Close();

BinaryReader bRead = new BinaryReader(new FileStream(path, FileMode.OpenOrCreate, FileAccess.Read));
string code = bRead.ReadString();
int credit = bRead.ReadInt32();
bRead.Close();`,
        },
      },
      {
        heading: "File I/O Exceptions",
        bullets: [
          "IOException — base class for exceptions during stream/file/directory processing.",
          "DirectoryNotFoundException — part of the path can't be found.",
          "FileNotFoundException — the file itself can't be found.",
          "EndOfStreamException — attempted to read beyond the end of a stream.",
        ],
        paragraphs: ["Always close streams in a finally block to release OS-level file handles."],
      },
      {
        heading: "Copy, Move, Delete",
        code: {
          lang: "csharp",
          content: `File.Copy("c:\\\\temp.txt", "c:\\\\copytemp.txt", true);
File.Delete("c:\\\\copytemp.txt");
File.Move("c:\\\\temp.txt", "c:\\\\NewLocation\\\\movetemp.txt");`,
        },
      },
      {
        heading: "ADO.NET in Practice",
        paragraphs: [
          "A typical database flow: open a Connection, build a Command (SQL text + parameters), then either read rows forward-only with a DataReader, or fill a disconnected DataSet via a DataAdapter for full CRUD (insert/update/delete/retrieve), often bound to a DataGridView.",
        ],
      },
    ],
  },
  {
    id: "wpf-databinding",
    order: 8,
    title: "WPF & Data Binding",
    shortTitle: "WPF & Data Binding",
    description: "XAML-based UI with Windows Presentation Foundation and binding controls to data.",
    sections: [
      {
        heading: "What Is WPF?",
        paragraphs: [
          "Windows Presentation Foundation (WPF) is a UI framework for building Windows desktop applications, using XAML (a declarative XML-based markup) to describe the interface separately from the C# code-behind that implements its logic. It succeeds Windows Forms with richer graphics, styling, templating, and layout.",
        ],
        code: {
          label: "Minimal XAML window",
          lang: "xml",
          content: `<Window x:Class="App.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        Title="Main Window" Height="200" Width="300">
    <StackPanel Margin="10">
        <TextBox x:Name="NameBox" />
        <Button Content="Say Hi" Click="Button_Click" />
    </StackPanel>
</Window>`,
        },
      },
      {
        heading: "WPF vs Windows Forms",
        table: {
          headers: ["Aspect", "Windows Forms", "WPF"],
          rows: [
            ["UI definition", "Designer-generated C#", "Declarative XAML"],
            ["Layout", "Absolute / Dock / Anchor", "Panels: Grid, StackPanel, DockPanel"],
            ["Styling", "Per-control properties", "Styles & templates"],
            ["Rendering", "GDI+", "DirectX / vector-based"],
          ],
        },
      },
      {
        heading: "Data Binding Basics",
        paragraphs: [
          "Data binding connects a UI element's property to a data source (an object's property, a collection, or another control) so changes propagate automatically instead of being copied by hand in code.",
        ],
        code: {
          label: "Binding a TextBox to a property",
          lang: "xml",
          content: `<TextBox Text="{Binding Path=StudentName, Mode=TwoWay}" />`,
        },
      },
      {
        heading: "Binding Modes",
        bullets: [
          "OneWay — source updates the target; the UI reflects the data but edits don't write back.",
          "TwoWay — source and target stay in sync in both directions (typical for editable form fields).",
          "OneTime — the target is set once from the source and never updates again.",
        ],
      },
      {
        heading: "INotifyPropertyChanged",
        paragraphs: [
          "For two-way binding to update the UI automatically when a property changes in code, the bound class should implement INotifyPropertyChanged and raise PropertyChanged whenever a property's value changes.",
        ],
        code: {
          lang: "csharp",
          content: `public class Student : INotifyPropertyChanged
{
    private string name;
    public string Name
    {
        get => name;
        set { name = value; PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(Name))); }
    }
    public event PropertyChangedEventHandler PropertyChanged;
}`,
        },
      },
      {
        heading: "Binding a List (DataGridView / ListBox)",
        code: {
          lang: "csharp",
          content: `List<Student> students = LoadStudents();
dataGridView1.DataSource = students;   // Windows Forms

// WPF equivalent
// <ListBox ItemsSource="{Binding Students}" />`,
        },
      },
    ],
  },
  {
    id: "async-tasks",
    order: 9,
    title: "Asynchronous Programming & Tasks",
    shortTitle: "Async / Tasks",
    description: "Keeping the UI responsive with async/await, Task, and background work.",
    sections: [
      {
        heading: "Why Asynchronous Code?",
        paragraphs: [
          "A GUI application runs its event handlers on a single UI thread. A long-running operation (a big file read, a slow database query, a network call) executed synchronously on that thread will freeze the interface until it finishes. Asynchronous programming lets that work run without blocking the UI thread.",
        ],
      },
      {
        heading: "async and await",
        paragraphs: [
          "The async modifier marks a method that can use await. await suspends execution of the async method until the awaited Task completes, without blocking the calling thread — control returns to the caller (e.g. the UI event loop) in the meantime.",
        ],
        code: {
          lang: "csharp",
          content: `private async void LoadButton_Click(object sender, EventArgs e)
{
    statusLabel.Text = "Loading...";
    string content = await ReadFileAsync(path);
    textBox1.Text = content;
    statusLabel.Text = "Done.";
}

private async Task<string> ReadFileAsync(string path)
{
    using StreamReader reader = new StreamReader(path);
    return await reader.ReadToEndAsync();
}`,
        },
      },
      {
        heading: "The Task Type",
        bullets: [
          "Task — represents an operation that doesn't return a value.",
          "Task<T> — represents an operation that will eventually produce a value of type T.",
          "Task.Run(() => ...) — offloads CPU-bound work onto a background thread from the thread pool.",
          "await Task.WhenAll(t1, t2, ...) — waits for multiple tasks to finish concurrently.",
        ],
        code: {
          lang: "csharp",
          content: `Task<int> CountLinesAsync(string path) =>
    Task.Run(() => File.ReadAllLines(path).Length);

int lines = await CountLinesAsync("data.txt");`,
        },
      },
      {
        heading: "Exceptions in Async Code",
        paragraphs: [
          "An exception thrown inside an async method is captured on the returned Task and re-thrown at the await point — so you can still use ordinary try/catch around an await expression.",
        ],
        code: {
          lang: "csharp",
          content: `try
{
    var data = await FetchDataAsync();
}
catch (HttpRequestException ex)
{
    MessageBox.Show(ex.Message);
}`,
        },
      },
      {
        heading: "Common Pitfalls",
        bullets: [
          "Blocking on async code with .Result or .Wait() on the UI thread can deadlock — always await instead.",
          "Marking an event handler async void is acceptable (it's the one place void is expected), but async Task is preferred for anything you need to await or catch errors from.",
          "Forgetting await on a Task-returning call lets the method continue before the operation finishes ('fire and forget' by accident).",
        ],
      },
    ],
  },
]

export function getModule(id: string) {
  return modules.find((m) => m.id === id)
}
