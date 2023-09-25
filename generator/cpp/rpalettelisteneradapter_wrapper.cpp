
  // Auto generated
  
  // include header:
  //#include "RPaletteListenerAdapterwrapper.h"
  //#include "header_cpp.h"
  
    #include "rpalettelisteneradapter_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RPaletteListenerAdapter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RPaletteListenerAdapter_Wrapper>("org.qcad", 1, 0, "RPaletteListenerAdapter_Wrapper");
        qmlRegisterInterface<RPaletteListenerAdapter_Wrapper>("RPaletteListenerAdapter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RPaletteListenerAdapter* t = new RJSType_RPaletteListenerAdapter();
          global.setProperty("RJSType_RPaletteListenerAdapter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RPaletteListenerAdapter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RPaletteListenerAdapter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RPaletteListenerAdapter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RPaletteListenerAdapter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RPaletteListenerAdapter_BaseJs", mob);
      
      QString fileName = ":generator/js/RPaletteListenerAdapter.js";
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
    RPaletteListenerAdapter_Wrapper::RPaletteListenerAdapter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RPaletteListenerAdapter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RPaletteListenerAdapter_Wrapper::RPaletteListenerAdapter_Wrapper(RJSApi& h, RPaletteListenerAdapter* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RPaletteListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RPaletteListenerAdapter_Wrapper"));
              //setObjectName("RPaletteListenerAdapter_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RPaletteListenerAdapter_Wrapper::~RPaletteListenerAdapter_Wrapper() {
            //RDebug::decCounter(QString("RPaletteListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RPaletteListenerAdapter_Wrapper"));

            //qDebug() << "RPaletteListenerAdapter_Wrapper::~RPaletteListenerAdapter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RPaletteListenerAdapter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RPaletteListenerAdapter_Wrapper::initConnections() {

          //setObjectName("RPaletteListenerAdapter_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is a QObject and not a wrapper for a null pointer:
              // wrapper is managed by the QObject as child:
              if (hasWrapped()) {
                QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
              }
            

          if (hasWrapped()) {
            
                // set parent of wrapper to wrapped:
                // wrapper can be looked up for object:
                QVariant vThis = QVariant::fromValue(this);
                getWrapped()->setProperty("__wrapper__",  vThis);

                // make sure wrapper is deleted when object is deleted:
                // make sure wrapper stays alive as long as the wrapped stays alive::
                QObject::setParent(getWrapped());
              
            // set up signal forwarding:
            
  connect(
    getWrapped(), 
    SIGNAL(paletteChanged()), 
    this, 
    SLOT(paletteChangedEmitter())
  );

              /*
              connect(
                getWrapped(),
                SIGNAL(destroyed(QObject*)),
                &handler,
                SLOT(slotDestroyed(QObject*))
              );
              */
            
          }
        }
      

  // constructors:
  
    // Class: RPaletteListenerAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RPaletteListenerAdapter_Wrapper::RPaletteListenerAdapter_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RPaletteListenerAdapter_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RPaletteListenerAdapter_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = NULL;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RPaletteListenerAdapter(
                a1_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

                    // no constructor without arguments defined
                    // allow constructor for prototype objects without args:
                    if (
                      a1.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RPaletteListenerAdapter";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RPaletteListenerAdapter
    // Function: updatePalette
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPaletteListenerAdapter_Wrapper::updatePalette
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
                RPaletteListenerAdapter* w = getWrapped();
                
                w->updatePalette(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updatePalette";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPaletteListenerAdapter
    // Function: paletteChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              RPaletteListenerAdapter_Wrapper::paletteChangedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit paletteChanged(
                  
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  