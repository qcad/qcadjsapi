
  // Auto generated
  
  // include header:
  //#include "RRulerwrapper.h"
  //#include "header_cpp.h"
  
    #include "rruler_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RRuler_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RRuler_Wrapper>("org.qcad", 1, 0, "RRuler_Wrapper");
        qmlRegisterInterface<RRuler_Wrapper>("RRuler_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RRuler* t = new RJSType_RRuler();
          global.setProperty("RJSType_RRuler", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RRuler::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RRuler_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RRuler_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RRuler_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RRuler_BaseJs", mob);
      
      QString fileName = ":generator/js/RRuler.js";
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
    RRuler_Wrapper::RRuler_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RRuler_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RRuler_Wrapper::RRuler_Wrapper(RJSApi& h, RRuler* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RRuler_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RRuler_Wrapper"));
              //setObjectName("RRuler_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RRuler_Wrapper::~RRuler_Wrapper() {
            //RDebug::decCounter(QString("RRuler_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RRuler_Wrapper"));

            //qDebug() << "RRuler_Wrapper::~RRuler_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RRuler";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RRuler_Wrapper::initConnections() {

          //setObjectName("RRuler_Wrapper");

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
    
    // Class: RRuler
    // Function: setGraphicsView
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RRuler_Wrapper::setGraphicsView
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGraphicsView_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: view (RGraphicsView)
  

          // pointer:
          RGraphicsView*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGraphicsView_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RRuler* w = getWrapped();
                
                w->setGraphicsView(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGraphicsView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RRuler
    // Function: getOrientation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RRuler_Wrapper::getOrientation
              (
                
              ) 
              
                const
              
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
                RRuler* w = getWrapped();
                Qt::Orientation res = 
                    
                w->getOrientation(
                  
                );
              
            // return type: Qt::Orientation

            return RJSHelper::cpp2js_Qt_Orientation(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getOrientation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RRuler
    // Function: setOrientation
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RRuler_Wrapper::setOrientation
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_Orientation(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: orientation (Qt::Orientation)
  
Qt::Orientation a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_Orientation(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RRuler* w = getWrapped();
                
                w->setOrientation(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOrientation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RRuler
    // Function: paintTick
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RRuler_Wrapper::paintTick
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: major (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        
  // convert js parameter to cpp: label (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RRuler* w = getWrapped();
                
                w->paintTick(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for paintTick";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RRuler
    // Function: getFont
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RRuler_Wrapper::getFont
              (
                
              ) 
              
                const
              
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
                RRuler* w = getWrapped();
                QFont res = 
                    
                w->getFont(
                  
                );
              
            // return type: QFont

            return RJSHelper::cpp2js_QFont(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RRuler
    // Function: updateViewport
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RRuler_Wrapper::updateViewport
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
                RRuler* w = getWrapped();
                
                w->updateViewport(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateViewport";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  