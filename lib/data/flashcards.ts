import type { Flashcard } from "@/lib/types";

export const flashcards: Flashcard[] = [
  {
    id: "fc-1",
    moduleId: "fundamentals",
    term: "CLR",
    definition:
      "Common Language Runtime — the execution engine of .NET. Handles JIT compilation of IL to native code, memory management, garbage collection, and type safety enforcement.",
  },
  {
    id: "fc-2",
    moduleId: "fundamentals",
    term: "CTS",
    definition:
      "Common Type System — defines how types are declared, used, and managed at runtime, enabling cross-language integration.",
  },
  {
    id: "fc-3",
    moduleId: "fundamentals",
    term: "CLS",
    definition:
      "Common Language Specification — a subset of CTS rules that all .NET languages must follow to guarantee interoperability.",
  },
  {
    id: "fc-4",
    moduleId: "fundamentals",
    term: "MSIL / CIL",
    definition:
      "Microsoft/Common Intermediate Language — the CPU-independent instruction set that all .NET source compiles to before JIT compilation.",
  },
  {
    id: "fc-5",
    moduleId: "fundamentals",
    term: "FCL",
    definition:
      "Framework Class Library — the large standard library of prebuilt types (collections, I/O, networking, etc.) available to all .NET languages.",
  },
  {
    id: "fc-6",
    moduleId: "fundamentals",
    term: "ADO.NET Connection",
    definition:
      "Opens and manages a physical connection to a data source (e.g. SqlConnection, OleDbConnection).",
  },
  {
    id: "fc-7",
    moduleId: "fundamentals",
    term: "ADO.NET DataReader",
    definition:
      "A fast, forward-only, read-only, connected cursor over query results.",
  },
  {
    id: "fc-8",
    moduleId: "fundamentals",
    term: "ADO.NET DataSet",
    definition:
      "A disconnected, in-memory cache of tables that supports bidirectional navigation and edits, filled/synced via a DataAdapter.",
  },
  {
    id: "fc-9",
    moduleId: "fundamentals",
    term: "LINQ",
    definition:
      "Language Integrated Query — lets you write query operations (filter, sort, project) directly in C#/VB syntax against collections, XML, or databases.",
  },
  {
    id: "fc-10",
    moduleId: "fundamentals",
    term: "Event-Driven Programming",
    definition:
      "A model where program flow is determined by events (clicks, key presses, timers) rather than a fixed top-to-bottom sequence.",
  },

  {
    id: "fc-11",
    moduleId: "csharp-syntax",
    term: "var",
    definition:
      "Implicitly-typed local variable — the compiler infers the type at compile time from the initializer; still strongly typed.",
  },
  {
    id: "fc-12",
    moduleId: "csharp-syntax",
    term: "const vs readonly",
    definition:
      "const is a compile-time constant set at declaration. readonly can be set in the constructor and can differ per instance.",
  },
  {
    id: "fc-13",
    moduleId: "csharp-syntax",
    term: "Value type",
    definition:
      "Stored directly on the stack (or inline), copied by value on assignment. Examples: int, double, struct, bool.",
  },
  {
    id: "fc-14",
    moduleId: "csharp-syntax",
    term: "Reference type",
    definition:
      "Stored on the heap; variables hold a reference/pointer to the object. Examples: class, string, array, delegate.",
  },
  {
    id: "fc-15",
    moduleId: "csharp-syntax",
    term: "boxing / unboxing",
    definition:
      "Boxing wraps a value type in an object on the heap; unboxing extracts the value type back out. Has a performance cost.",
  },
  {
    id: "fc-16",
    moduleId: "csharp-syntax",
    term: "foreach",
    definition:
      "Iterates over any IEnumerable collection without needing an index variable; read-only access to each element.",
  },
  {
    id: "fc-17",
    moduleId: "csharp-syntax",
    term: "params",
    definition:
      "Lets a method accept a variable number of arguments as an array, e.g. void Sum(params int[] nums).",
  },
  {
    id: "fc-18",
    moduleId: "csharp-syntax",
    term: "out parameter",
    definition:
      "Passes a value back through a parameter; the argument does not need to be initialized before the call, but must be assigned inside the method.",
  },
  {
    id: "fc-19",
    moduleId: "csharp-syntax",
    term: "ref parameter",
    definition:
      "Passes an argument by reference; the caller's variable must already be initialized, and changes inside the method are visible to the caller.",
  },
  {
    id: "fc-20",
    moduleId: "csharp-syntax",
    term: "String vs StringBuilder",
    definition:
      "string is immutable — every modification creates a new object. StringBuilder is mutable and efficient for repeated concatenation.",
  },

  {
    id: "fc-21",
    moduleId: "oop",
    term: "Encapsulation",
    definition:
      "Bundling data and methods together while restricting direct access to internal state, typically via private fields and public properties.",
  },
  {
    id: "fc-22",
    moduleId: "oop",
    term: "Inheritance",
    definition:
      "A class (derived) acquires members from another class (base) using ':' syntax, enabling code reuse and specialization.",
  },
  {
    id: "fc-23",
    moduleId: "oop",
    term: "Polymorphism",
    definition:
      "The ability for objects of different types to be treated through a common interface — via method overriding (runtime) or overloading (compile-time).",
  },
  {
    id: "fc-24",
    moduleId: "oop",
    term: "Abstraction",
    definition:
      "Exposing only essential behavior while hiding implementation detail, often via abstract classes or interfaces.",
  },
  {
    id: "fc-25",
    moduleId: "oop",
    term: "Abstract class vs Interface",
    definition:
      "An abstract class can have implemented members and state, and a class can inherit only one. An interface has no state, only members that implementing classes must define, and a class can implement many.",
  },
  {
    id: "fc-26",
    moduleId: "oop",
    term: "virtual / override",
    definition:
      "'virtual' on a base method allows derived classes to redefine it with 'override', enabling runtime polymorphism.",
  },
  {
    id: "fc-27",
    moduleId: "oop",
    term: "Constructor overloading",
    definition:
      "Defining multiple constructors with different parameter lists in the same class to allow different ways of initializing an object.",
  },
  {
    id: "fc-28",
    moduleId: "oop",
    term: "sealed",
    definition:
      "Prevents a class from being inherited further, or a method from being overridden further down the hierarchy.",
  },
  {
    id: "fc-29",
    moduleId: "oop",
    term: "this keyword",
    definition:
      "Refers to the current instance of the class; used to disambiguate fields from parameters or to chain constructors.",
  },
  {
    id: "fc-30",
    moduleId: "oop",
    term: "base keyword",
    definition:
      "Accesses members of the immediate base class, e.g. calling base.Method() or base(args) in a constructor.",
  },

  {
    id: "fc-31",
    moduleId: "delegates-events",
    term: "Delegate",
    definition:
      "A type-safe reference to a method with a matching signature; allows methods to be passed as parameters and invoked indirectly.",
  },
  {
    id: "fc-32",
    moduleId: "delegates-events",
    term: "Multicast delegate",
    definition:
      "A delegate that holds references to more than one method, invoking each in sequence when called, combined with '+='.",
  },
  {
    id: "fc-33",
    moduleId: "delegates-events",
    term: "Event",
    definition:
      "A publisher-subscriber mechanism built on delegates; restricts external code to only subscribe/unsubscribe ('+=' / '-='), not invoke directly.",
  },
  {
    id: "fc-34",
    moduleId: "delegates-events",
    term: "EventHandler",
    definition:
      "The standard delegate signature for events: void Handler(object sender, EventArgs e).",
  },
  {
    id: "fc-35",
    moduleId: "delegates-events",
    term: "Lambda expression",
    definition:
      "A concise inline anonymous function, e.g. x => x * 2, often used to implement delegates or event handlers.",
  },
  {
    id: "fc-36",
    moduleId: "delegates-events",
    term: "Anonymous method",
    definition:
      "An inline unnamed method defined with the delegate keyword, a predecessor to lambda syntax.",
  },
  {
    id: "fc-37",
    moduleId: "delegates-events",
    term: "Custom EventArgs",
    definition:
      "A class deriving from EventArgs used to pass extra data along with a custom event.",
  },

  {
    id: "fc-38",
    moduleId: "winforms-controls",
    term: "Windows Forms (WinForms)",
    definition:
      "A GUI framework for building desktop apps with drag-and-drop designer support and an event-driven model.",
  },
  {
    id: "fc-39",
    moduleId: "winforms-controls",
    term: "Control",
    definition:
      "The base class for visual WinForms elements (Button, TextBox, Label, etc.) providing common properties like Text, Size, and Location.",
  },
  {
    id: "fc-40",
    moduleId: "winforms-controls",
    term: "Click event",
    definition:
      "Fired when a control (typically a Button) is clicked; the most common event wired up in form designers.",
  },
  {
    id: "fc-41",
    moduleId: "winforms-controls",
    term: "MessageBox.Show",
    definition:
      "Displays a modal dialog with a message and optional buttons/icons, commonly used for alerts or confirmations.",
  },
  {
    id: "fc-42",
    moduleId: "winforms-controls",
    term: "ComboBox vs ListBox",
    definition:
      "ComboBox shows a single selectable item in a dropdown; ListBox displays multiple items simultaneously, optionally with multi-select.",
  },
  {
    id: "fc-43",
    moduleId: "winforms-controls",
    term: "DataGridView",
    definition:
      "A grid control for displaying and editing tabular data, often bound to a DataTable or list.",
  },
  {
    id: "fc-44",
    moduleId: "winforms-controls",
    term: "Anchor vs Dock",
    definition:
      "Anchor keeps edges a fixed distance from the parent's edges as it resizes; Dock stretches a control to fill an entire side or the whole container.",
  },
  {
    id: "fc-45",
    moduleId: "winforms-controls",
    term: "MDI (Multiple Document Interface)",
    definition:
      "A form design where a parent form (IsMdiContainer = true) hosts multiple child forms inside it.",
  },

  {
    id: "fc-46",
    moduleId: "exception-validation",
    term: "try / catch / finally",
    definition:
      "try wraps risky code, catch handles a thrown exception, finally always runs (cleanup) regardless of whether an exception occurred.",
  },
  {
    id: "fc-47",
    moduleId: "exception-validation",
    term: "throw",
    definition:
      "Explicitly raises an exception, either a new one or rethrowing a caught one to preserve or add context.",
  },
  {
    id: "fc-48",
    moduleId: "exception-validation",
    term: "Exception hierarchy",
    definition:
      "All exceptions derive from System.Exception; catch more specific types (e.g. FormatException) before general ones.",
  },
  {
    id: "fc-49",
    moduleId: "exception-validation",
    term: "Custom exception",
    definition:
      "A user-defined class deriving from Exception (or a subclass) to represent domain-specific error conditions.",
  },
  {
    id: "fc-50",
    moduleId: "exception-validation",
    term: "Data validation",
    definition:
      "Checking user input against rules (format, range, required) before processing, often via if-checks, TryParse, or validation controls.",
  },
  {
    id: "fc-51",
    moduleId: "exception-validation",
    term: "int.TryParse",
    definition:
      "Attempts to convert a string to an int without throwing; returns true/false and outputs the result via an out parameter.",
  },

  {
    id: "fc-52",
    moduleId: "file-database",
    term: "StreamReader / StreamWriter",
    definition:
      "Classes for reading and writing text files line-by-line or as whole content.",
  },
  {
    id: "fc-53",
    moduleId: "file-database",
    term: "File class",
    definition:
      "Static class in System.IO offering methods like File.Exists, File.ReadAllText, File.WriteAllText for simple file operations.",
  },
  {
    id: "fc-54",
    moduleId: "file-database",
    term: "SqlConnection",
    definition:
      "Represents an open connection to a SQL Server database; must be opened, used, and closed/disposed (ideally via 'using').",
  },
  {
    id: "fc-55",
    moduleId: "file-database",
    term: "SqlCommand",
    definition:
      "Represents a SQL statement or stored procedure to execute against a connection; use ExecuteReader, ExecuteNonQuery, or ExecuteScalar.",
  },
  {
    id: "fc-56",
    moduleId: "file-database",
    term: "DataAdapter",
    definition:
      "Bridges a connected data source and a disconnected DataSet/DataTable, filling data with Fill() and persisting changes with Update().",
  },
  {
    id: "fc-57",
    moduleId: "file-database",
    term: "Parameterized query",
    definition:
      "A SQL command using placeholders (e.g. @name) filled via SqlParameter, preventing SQL injection.",
  },

  {
    id: "fc-58",
    moduleId: "wpf-databinding",
    term: "XAML",
    definition:
      "Extensible Application Markup Language — a declarative XML-based syntax for defining WPF UI layout and resources.",
  },
  {
    id: "fc-59",
    moduleId: "wpf-databinding",
    term: "Data binding",
    definition:
      "Automatically synchronizes a UI element's property with a data source property, using {Binding Path=...} syntax.",
  },
  {
    id: "fc-60",
    moduleId: "wpf-databinding",
    term: "INotifyPropertyChanged",
    definition:
      "An interface a bound data class implements to notify the UI when a property value changes, keeping bindings in sync.",
  },
  {
    id: "fc-61",
    moduleId: "wpf-databinding",
    term: "DependencyProperty",
    definition:
      "A special WPF property type that supports data binding, styling, animation, and default value inheritance.",
  },

  {
    id: "fc-62",
    moduleId: "async-tasks",
    term: "async / await",
    definition:
      "Keywords that let a method run asynchronously without blocking the calling thread; await suspends until the awaited Task completes.",
  },
  {
    id: "fc-63",
    moduleId: "async-tasks",
    term: "Task",
    definition:
      "Represents an asynchronous operation; Task<T> represents one that returns a value of type T.",
  },
  {
    id: "fc-64",
    moduleId: "async-tasks",
    term: "Task.WhenAll",
    definition:
      "Awaits multiple tasks concurrently, completing when all of them have finished.",
  },
  {
    id: "fc-65",
    moduleId: "async-tasks",
    term: "Deadlock risk",
    definition:
      "Blocking synchronously on async code (e.g. .Result or .Wait()) from a UI thread can deadlock if the continuation needs that same thread.",
  },
];

export function getFlashcardsByModule(moduleId: string) {
  return flashcards.filter((f) => f.moduleId === moduleId);
}
