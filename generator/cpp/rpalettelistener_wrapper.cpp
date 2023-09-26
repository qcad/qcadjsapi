
  // Auto generated
  
  // include header:
  //#include "RPaletteListenerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rpalettelistener_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RPaletteListener*> RPaletteListener_Wrapper::basecasters_RPaletteListener;
    
    // static functions implementation in singleton wrapper:
    
    void RPaletteListener_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RPaletteListener_Wrapper>("org.qcad", 1, 0, "RPaletteListener_Wrapper");
        qmlRegisterInterface<RPaletteListener_Wrapper>("RPaletteListener_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RPaletteListener* t = new RJSType_RPaletteListener();
          global.setProperty("RJSType_RPaletteListener", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RPaletteListener::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RPaletteListener_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RPaletteListener_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RPaletteListener_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RPaletteListener_BaseJs", mob);
      
      QString fileName = ":generator/js/RPaletteListener.js";
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
    RPaletteListener_Wrapper::RPaletteListener_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RPaletteListener_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RPaletteListener_Wrapper::RPaletteListener_Wrapper(RJSApi& h, RPaletteListener* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RPaletteListener_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RPaletteListener_Wrapper"));
              //setObjectName("RPaletteListener_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RPaletteListener_Wrapper::~RPaletteListener_Wrapper() {
            //RDebug::decCounter(QString("RPaletteListener_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RPaletteListener_Wrapper"));

            //qDebug() << "RPaletteListener_Wrapper::~RPaletteListener_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RPaletteListener";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RPaletteListener_Wrapper::initConnections() {

          //setObjectName("RPaletteListener_Wrapper");

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
    
    // Class: RPaletteListener
    // Function: updatePalette
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPaletteListener_Wrapper::updatePalette
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RPaletteListener* w = getWrapped();
                
                w->updatePalette(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updatePalette";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
