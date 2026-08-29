import type { CheatSheetEntry } from "@/lib/types"

export const cheatSheet: CheatSheetEntry[] = [
  {
    category: ".NET Fundamentals",
    items: [
      { term: "CLR", detail: "Common Language Runtime — executes code, JIT-compiles IL, manages memory/GC, enforces type safety." },
      { term: "CTS / CLS", detail: "Common Type System defines all types; Common Language Specification is the interoperable subset every .NET language follows." },
      { term: "MSIL / CIL", detail: "Intermediate Language all .NET source compiles to before JIT compilation to native code." },
      { term: "FCL", detail: "Framework Class Library — the shared standard library (collections, IO, networking, etc.)." },
      { term: "ADO.NET connected", detail: "Connection → Command → DataReader (fast, forward-only, read-only)." },
      { term: "ADO.NET disconnected", detail: "DataAdapter fills a DataSet/DataTable — editable in memory, no live connection required." },
      { term: "LINQ", detail: "Language Integrated Query — query syntax built into C#/VB for collections, XML, and databases." },
    ],
  },
  {
    category: "C# Syntax Essentials",
    items: [
      { term: "var", detail: "Implicitly typed local variable, inferred at compile time — still strongly typed." },
      { term: "const vs readonly", detail: "const: compile-time, same for all instances. readonly: set once, can vary per instance via constructor." },
      { term: "Value vs reference types", detail: "Value types (int, struct, bool) copy by value on the stack. Reference types (class, string, array) live on the heap and copy a reference." },
      { term: "Boxing/unboxing", detail: "Wrapping a value type as an object (boxing) and extracting it back (unboxing) — has a performance cost." },
      { term: "ref / out / params", detail: "ref: caller must init, changes flow both ways. out: caller need not init, must be assigned in method. params: variable-length argument array." },
      { term: "string vs StringBuilder", detail: "string is immutable (new object per change); StringBuilder mutates in place — use for loops/concatenation." },
      { term: "switch expression", detail: "value switch { case1 => result1, case2 => result2, _ => defaultResult };" },
    ],
    // eslint note: code samples kept short and exam-relevant
  },
  {
    category: "OOP Pillars",
    items: [
      { term: "Encapsulation", detail: "Hide internal state behind private fields + public properties/methods." },
      { term: "Inheritance", detail: "class Derived : Base — reuse and extend a base class's members." },
      { term: "Polymorphism", detail: "Same call, different behavior — via method overriding (virtual/override) or overloading (same name, different signature)." },
      { term: "Abstraction", detail: "Expose only essential behavior — via abstract classes (partial implementation) or interfaces (contract only)." },
      { term: "abstract class vs interface", detail: "Abstract class: single inheritance, can hold state/implementation. Interface: multiple implementation, contract only (members, no fields)." },
      { term: "virtual / override / sealed", detail: "virtual marks a base method as overridable; override redefines it; sealed blocks further inheritance/overriding." },
      { term: "this / base", detail: "this refers to the current instance; base accesses the immediate base class's members or constructor." },
    ],
  },
  {
    category: "Delegates & Events",
    items: [
      { term: "Delegate", detail: "delegate int Op(int a, int b); — a type-safe function pointer / method reference." },
      { term: "Multicast delegate", detail: "Combine handlers with += ; all invoked in order when the delegate is called." },
      { term: "Event", detail: "public event EventHandler Clicked; — restricts outside code to += / -= only, not direct invocation." },
      { term: "EventHandler signature", detail: "void Handler(object sender, EventArgs e)" },
      { term: "Lambda", detail: "(x, y) => x + y — concise anonymous function, commonly used as an event handler or delegate body." },
    ],
  },
  {
    category: "WinForms Controls",
    items: [
      { term: "Common controls", detail: "Button, TextBox, Label, ComboBox, ListBox, CheckBox, RadioButton, DataGridView, PictureBox." },
      { term: "Click event wiring", detail: "button1.Click += new EventHandler(button1_Click); or double-click the control in the designer." },
      { term: "MessageBox.Show", detail: "MessageBox.Show(\"text\", \"title\", MessageBoxButtons.YesNo, MessageBoxIcon.Warning);" },
      { term: "Anchor vs Dock", detail: "Anchor: fixed distance to chosen parent edges on resize. Dock: stretches to fill an edge or the whole container." },
      { term: "MDI", detail: "Set the parent form's IsMdiContainer = true; child forms set MdiParent = this before Show()." },
    ],
  },
  {
    category: "Exceptions & Validation",
    items: [
      { term: "try/catch/finally", detail: "try { risky() } catch (FormatException ex) { handle } finally { alwaysRuns() }" },
      { term: "Catch order", detail: "Order catch blocks from most specific exception type to most general (Exception last)." },
      { term: "throw / rethrow", detail: "throw new ArgumentException(\"msg\"); or throw; inside a catch to preserve the original stack trace." },
      { term: "Custom exception", detail: "class MyException : Exception { public MyException(string msg) : base(msg) {} }" },
      { term: "int.TryParse", detail: "if (int.TryParse(input, out int n)) { ... } — safe conversion without throwing." },
    ],
  },
  {
    category: "Files & Databases",
    items: [
      { term: "Read a text file", detail: "string text = File.ReadAllText(path); or using (var sr = new StreamReader(path)) { ... }" },
      { term: "Write a text file", detail: "File.WriteAllText(path, content); or using (var sw = new StreamWriter(path)) { sw.WriteLine(line); }" },
      { term: "SQL connect + query", detail: "using (var conn = new SqlConnection(connStr)) { conn.Open(); var cmd = new SqlCommand(sql, conn); var reader = cmd.ExecuteReader(); }" },
      { term: "Parameterized query", detail: "cmd.Parameters.AddWithValue(\"@name\", value); — always prefer this over string-concatenated SQL." },
      { term: "DataAdapter fill", detail: "var da = new SqlDataAdapter(cmd); var dt = new DataTable(); da.Fill(dt);" },
    ],
  },
  {
    category: "WPF & Data Binding",
    items: [
      { term: "XAML element", detail: "<Button Content=\"OK\" Click=\"Button_Click\" /> — declarative UI markup." },
      { term: "Binding syntax", detail: "<TextBox Text=\"{Binding Path=Name, Mode=TwoWay}\" />" },
      { term: "INotifyPropertyChanged", detail: "Implement to raise PropertyChanged so bound UI updates automatically when a property setter runs." },
      { term: "DependencyProperty", detail: "Backing store for a WPF property that supports binding, styling, animation, and inheritance." },
    ],
  },
  {
    category: "Async & Tasks",
    items: [
      { term: "async / await", detail: "public async Task<int> GetAsync() { var r = await SomeCallAsync(); return r; }" },
      { term: "Task.WhenAll", detail: "await Task.WhenAll(task1, task2, task3); — run concurrently, complete when all finish." },
      { term: "Avoid deadlocks", detail: "Never call .Result or .Wait() on an async call from the UI thread — await it instead." },
    ],
  },
]
