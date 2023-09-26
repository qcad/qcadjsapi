
  // Auto generated
  
  // include header:
  //#include "RSpatialIndexVisitorAdapterwrapper.h"
  //#include "header_cpp.h"
  
    #include "rspatialindexvisitoradapter_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RSpatialIndexVisitorAdapter*> RSpatialIndexVisitorAdapter_Wrapper::basecasters_RSpatialIndexVisitorAdapter;
    
    // static functions implementation in singleton wrapper:
    
    void RSpatialIndexVisitorAdapter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RSpatialIndexVisitorAdapter_Wrapper>("org.qcad", 1, 0, "RSpatialIndexVisitorAdapter_Wrapper");
        qmlRegisterInterface<RSpatialIndexVisitorAdapter_Wrapper>("RSpatialIndexVisitorAdapter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RSpatialIndexVisitorAdapter* t = new RJSType_RSpatialIndexVisitorAdapter();
          global.setProperty("RJSType_RSpatialIndexVisitorAdapter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RSpatialIndexVisitorAdapter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RSpatialIndexVisitorAdapter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RSpatialIndexVisitorAdapter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RSpatialIndexVisitorAdapter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RSpatialIndexVisitorAdapter_BaseJs", mob);
      
      QString fileName = ":generator/js/RSpatialIndexVisitorAdapter.js";
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
    RSpatialIndexVisitorAdapter_Wrapper::RSpatialIndexVisitorAdapter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RSpatialIndexVisitorAdapter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RSpatialIndexVisitorAdapter_Wrapper::RSpatialIndexVisitorAdapter_Wrapper(RJSApi& h, RSpatialIndexVisitorAdapter* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RSpatialIndexVisitorAdapter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RSpatialIndexVisitorAdapter_Wrapper"));
              //setObjectName("RSpatialIndexVisitorAdapter_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RSpatialIndexVisitorAdapter_Wrapper::~RSpatialIndexVisitorAdapter_Wrapper() {
            //RDebug::decCounter(QString("RSpatialIndexVisitorAdapter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RSpatialIndexVisitorAdapter_Wrapper"));

            //qDebug() << "RSpatialIndexVisitorAdapter_Wrapper::~RSpatialIndexVisitorAdapter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RSpatialIndexVisitorAdapter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RSpatialIndexVisitorAdapter_Wrapper::initConnections() {

          //setObjectName("RSpatialIndexVisitorAdapter_Wrapper");

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
  
    // Class: RSpatialIndexVisitorAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RSpatialIndexVisitorAdapter_Wrapper::RSpatialIndexVisitorAdapter_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RSpatialIndexVisitorAdapter_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RSpatialIndexVisitorAdapter_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RSpatialIndexVisitorAdapter(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RSpatialIndexVisitorAdapter";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RSpatialIndexVisitorAdapter
    // Function: visitData
    // Source: 
    // Static: false
    // Parameters: 8
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndexVisitorAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      visitDataSuper
                    
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5, 
  const QJSValue& 
  a6, 
  const QJSValue& 
  a7, 
  const QJSValue& 
  a8
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

   && RJSHelper::is_double(handler, a4
  )

   && RJSHelper::is_double(handler, a5
  )

   && RJSHelper::is_double(handler, a6
  )

   && RJSHelper::is_double(handler, a7
  )

   && RJSHelper::is_double(handler, a8
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: id (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: pos (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: x1 (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        
  // convert js parameter to cpp: y1 (double)
  
double a4_cpp;

      a4_cpp = RJSHelper::js2cpp_double(handler, a4);
        
  // convert js parameter to cpp: z1 (double)
  
double a5_cpp;

      a5_cpp = RJSHelper::js2cpp_double(handler, a5);
        
  // convert js parameter to cpp: x2 (double)
  
double a6_cpp;

      a6_cpp = RJSHelper::js2cpp_double(handler, a6);
        
  // convert js parameter to cpp: y2 (double)
  
double a7_cpp;

      a7_cpp = RJSHelper::js2cpp_double(handler, a7);
        
  // convert js parameter to cpp: z2 (double)
  
double a8_cpp;

      a8_cpp = RJSHelper::js2cpp_double(handler, a8);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSpatialIndexVisitorAdapter* w = getWrapped();
                
                w->visitData(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    , a8_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for visitData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RSpatialIndexVisitorAdapter
    // Function: visitNode
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              RSpatialIndexVisitorAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      visitNodeSuper
                    
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5, 
  const QJSValue& 
  a6
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

   && RJSHelper::is_double(handler, a4
  )

   && RJSHelper::is_double(handler, a5
  )

   && RJSHelper::is_double(handler, a6
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x1 (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: y1 (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: z1 (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        
  // convert js parameter to cpp: x2 (double)
  
double a4_cpp;

      a4_cpp = RJSHelper::js2cpp_double(handler, a4);
        
  // convert js parameter to cpp: y2 (double)
  
double a5_cpp;

      a5_cpp = RJSHelper::js2cpp_double(handler, a5);
        
  // convert js parameter to cpp: z2 (double)
  
double a6_cpp;

      a6_cpp = RJSHelper::js2cpp_double(handler, a6);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RSpatialIndexVisitorAdapter* w = getWrapped();
                
                w->visitNode(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for visitNode";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
