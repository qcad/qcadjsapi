
  // Auto generated
  
  // include header:
  //#include "RToolMatrixItemDelegatewrapper.h"
  //#include "header_cpp.h"
  
    #include "rtoolmatrixitemdelegate_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RToolMatrixItemDelegate_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RToolMatrixItemDelegate_Wrapper>("org.qcad", 1, 0, "RToolMatrixItemDelegate_Wrapper");
        qmlRegisterInterface<RToolMatrixItemDelegate_Wrapper>("RToolMatrixItemDelegate_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RToolMatrixItemDelegate* t = new RJSType_RToolMatrixItemDelegate();
          global.setProperty("RJSType_RToolMatrixItemDelegate", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RToolMatrixItemDelegate::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RToolMatrixItemDelegate_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RToolMatrixItemDelegate_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RToolMatrixItemDelegate_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RToolMatrixItemDelegate_BaseJs", mob);
      
      QString fileName = ":generator/js/RToolMatrixItemDelegate.js";
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
    RToolMatrixItemDelegate_Wrapper::RToolMatrixItemDelegate_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RToolMatrixItemDelegate_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RToolMatrixItemDelegate_Wrapper::RToolMatrixItemDelegate_Wrapper(RJSApi& h, RToolMatrixItemDelegate* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RToolMatrixItemDelegate_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RToolMatrixItemDelegate_Wrapper"));
              //setObjectName("RToolMatrixItemDelegate_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RToolMatrixItemDelegate_Wrapper::~RToolMatrixItemDelegate_Wrapper() {
            //RDebug::decCounter(QString("RToolMatrixItemDelegate_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RToolMatrixItemDelegate_Wrapper"));

            //qDebug() << "RToolMatrixItemDelegate_Wrapper::~RToolMatrixItemDelegate_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RToolMatrixItemDelegate";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RToolMatrixItemDelegate_Wrapper::initConnections() {

          //setObjectName("RToolMatrixItemDelegate_Wrapper");

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
  
    // Class: RToolMatrixItemDelegate
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
RToolMatrixItemDelegate_Wrapper::RToolMatrixItemDelegate_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RToolMatrixItemDelegate_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RToolMatrixItemDelegate_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QTreeView_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QWidget_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: view (QTreeView)
  

          // pointer:
          QTreeView*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTreeView_ptr(handler, a1);
        
  // convert js parameter to cpp: parent (QWidget)
  

          // pointer:
          QWidget*
         a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RToolMatrixItemDelegate_Base(
              handler
              
                ,
              a1_cpp
    , a2_cpp
    
            );
            wrappedCreated = true;

            // set handler for wrapped base object:
            //((RToolMatrixItemDelegate_Base*)wrapped)->setHandler(handler);

            // store self to call into JS:
            ((RToolMatrixItemDelegate_Base*)wrapped)->self = handler.getSelf();
          

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
   && a2.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RToolMatrixItemDelegate";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  