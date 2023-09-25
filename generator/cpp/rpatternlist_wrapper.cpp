
  // Auto generated
  
  // include header:
  //#include "RPatternListwrapper.h"
  //#include "header_cpp.h"
  
    #include "rpatternlist_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RPatternList_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RPatternList_Wrapper>("org.qcad", 1, 0, "RPatternList_Wrapper");
        qmlRegisterInterface<RPatternList_Wrapper>("RPatternList_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RPatternList* t = new RJSType_RPatternList();
          global.setProperty("RJSType_RPatternList", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RPatternList::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RPatternList_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RPatternList_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RPatternList_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RPatternList_BaseJs", mob);
      
      QString fileName = ":generator/js/RPatternList.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      qDebug() << "Evaluating file: " << fileName;
      QJSValue result = engine->evaluate(contents, fileName);
      if (result.isError()) {
          qWarning()
              << "Uncaught exception at line"
              << result.property("lineNumber").toInt()
              << ":" << result.toString();
      }
    }
  
    /*
    // special constructor used as prototype:
    RPatternList_Wrapper::RPatternList_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RPatternList_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RPatternList_Wrapper::RPatternList_Wrapper(RJSApi& h, RPatternList* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RPatternList_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RPatternList_Wrapper"));
              //setObjectName("RPatternList_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RPatternList_Wrapper::~RPatternList_Wrapper() {
            //RDebug::decCounter(QString("RPatternList_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RPatternList_Wrapper"));

            //qDebug() << "RPatternList_Wrapper::~RPatternList_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RPatternList";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RPatternList_Wrapper::initConnections() {

          //setObjectName("RPatternList_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is not a QObject:
              // wrapper is managed by script engine:
              //QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
            

          if (hasWrapped()) {
            
            // set up signal forwarding:
            
          }
        }
      

  // constructors:
  

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  