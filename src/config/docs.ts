export type DocBlock =
  | { type: 'h1'; content: string }
  | { type: 'h2'; content: string }
  | { type: 'h3'; content: string }
  | { type: 'p-lead'; content: string }
  | { type: 'p'; content: string }
  | { type: 'code'; content: string; language: string; isWindow: boolean }
  | { type: 'list'; items: string[] }
  | { type: 'api-list'; items: { name: string; description: string }[] };

export interface DocSection {
  id: string;
  sidebarTitle: string;
  category: 'Getting Started' | 'API Reference';
  blocks: DocBlock[];
}

export const docSections: DocSection[] = [
  {
    id: 'installation',
    sidebarTitle: 'Installation',
    category: 'Getting Started',
    blocks: [
      { type: 'h1', content: 'Installation' },
      { type: 'p-lead', content: 'Get started with rs_iron by adding it to your Flutter project.' },
      { type: 'h3', content: '1. Add dependencies' },
      { type: 'p', content: 'Run the following command to add rs_iron to your `pubspec.yaml`.' },
      {
        type: 'code',
        language: 'bash',
        isWindow: false,
        content: 'flutter pub add rs_iron\nflutter pub add --dev build_runner'
      }
    ]
  },
  {
    id: 'basic-usage',
    sidebarTitle: 'Basic Usage',
    category: 'Getting Started',
    blocks: [
      { type: 'h2', content: 'Basic Usage' },
      { type: 'p', content: 'Annotate your classes with <code>@Service()</code> and let rs_iron handle the rest.' },
      {
        type: 'code',
        language: 'dart',
        isWindow: true,
        content: `@Repository()
class UserRepository {
  Future<String> getUserName() async => 'Jane';
}

@Service()
class UserService {
  final UserRepository repository;
  
  // repo is automatically injected via constructor!
  UserService(this.repository);

  Future<String> loadName() => repository.getUserName();
}`
      },
      { type: 'p', content: 'Add an entry point to trigger code generation:' },
      {
        type: 'code',
        language: 'dart',
        isWindow: true,
        content: `@IronEntryPoint()
class AppModule {}`
      },
      { type: 'p', content: 'Run the build runner to generate the DI container:' },
      {
        type: 'code',
        language: 'bash',
        isWindow: false,
        content: 'dart run build_runner build -d'
      },
      { type: 'p', content: 'Initialize it in your `main.dart` and register the generated dependencies:' },
      {
        type: 'code',
        language: 'dart',
        isWindow: true,
        content: `void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await IronCore.initialize((container) {
    container.registerGeneratedDependencies();
  });
  
  runApp(MyApp());
}`
      }
    ]
  },
  {
    id: 'bloc-integration',
    sidebarTitle: 'BLoC Integration',
    category: 'Getting Started',
    blocks: [
      { type: 'h2', content: 'BLoC Integration & Flutter Mixins' },
      { type: 'p', content: 'rs_iron works beautifully with the BLoC pattern. Because rs_iron provides global access via generated mixins, you don\'t even need <code>BlocProvider</code> to pass dependencies down the widget tree.' },
      { type: 'p', content: 'Simply use the <code>IronCore</code> and <code>IronMixin</code> mixins on your <code>StatefulWidget</code> or <code>StatelessWidget</code> to gain direct property access to your services.' },
      {
        type: 'code',
        language: 'dart',
        isWindow: true,
        content: `class _HomePageState extends State<HomePage> with IronCore, IronMixin {
  @override
  void initState() {
    super.initState();
    // userBloc is automatically available from IronMixin!
    userBloc.add(const LoadUsersEvent());
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: BlocBuilder<UserBloc, UserState>(
        bloc: userBloc, // Passing the instance directly
        builder: (context, state) {
          // ...
        }
      ),
      floatingActionButton: FloatingActionButton(
        // routerService is also magically available
        onPressed: () => routerService.navigateToCreateUser(),
        child: const Icon(Icons.add),
      ),
    );
  }
}`
      }
    ]
  },
  {
    id: 'annotations',
    sidebarTitle: 'Annotations',
    category: 'API Reference',
    blocks: [
      { type: 'h2', content: 'Annotations & APIs' },
      { type: 'p', content: 'rs_iron relies heavily on annotations to register your dependencies at compile time. Here is a list of all available annotations and their specific uses.' },
      {
        type: 'api-list',
        items: [
          { name: '@Service()', description: 'Used to mark a class as a business logic service layer.' },
          { name: '@Repository()', description: 'Used to mark a class as a data access object, typically interacting with databases or external APIs.' },
          { name: '@Controller()', description: 'Used for marking classes that act as a ViewModel or Controller in MVC patterns.' },
          { name: '@Component()', description: 'A generic annotation for any class that should be managed by the DI container.' },
          { name: '@UseCase()', description: 'Marks a class as a domain-specific use case (useful in Clean Architecture).' },
          { name: '@DataSource()', description: 'Marks a class responsible for raw data fetching (local DB, shared preferences, network client).' }
        ]
      },
      { type: 'h3', content: 'Scoping and Lifecycle' },
      {
        type: 'list',
        items: [
          '<strong>Singleton scope (default)</strong>: Resolved exactly once. Eagerly instantiated on startup.',
          '<strong>Lazy Singleton</strong>: Resolved exactly once, but instantiated only when first requested.',
          '<strong>Factory</strong>: A new instance is returned every time it is injected or requested.'
        ]
      },
      { type: 'p', content: 'You can customize the scope using the <code>@Scope()</code> annotation or passing a parameter: <code>@Service(scope: ScopeType.lazySingleton)</code>.' },
      { type: 'h3', content: 'Advanced Annotations' },
      {
        type: 'api-list',
        items: [
          { name: '@Configuration() and @Bean()', description: 'Used to register third-party classes or objects you don\'t own by defining factory methods within a Configuration class.' },
          { name: '@Qualifier(\'name\')', description: 'When multiple implementations of an interface are registered, use Qualifier to specify exactly which one you want injected.' },
          { name: '@Profile(\'prod\')', description: 'Ensures the dependency is only registered and injected if the specified environment profile is active.' }
        ]
      }
    ]
  }
];
