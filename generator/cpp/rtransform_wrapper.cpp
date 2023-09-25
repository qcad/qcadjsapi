
  // Auto generated
  
  // include header:
  //#include "RTransformwrapper.h"
  //#include "header_cpp.h"
  
    #include "rtransform_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void RTransform_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RTransform_Wrapper>("org.qcad", 1, 0, "RTransform_Wrapper");
        qmlRegisterInterface<RTransform_Wrapper>("RTransform_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RTransform* t = new RJSType_RTransform();
          global.setProperty("RJSType_RTransform", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RTransform::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RTransform_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RTransform_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RTransform_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RTransform_BaseJs", mob);
      
      QString fileName = ":generator/js/RTransform.js";
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
    RTransform_Wrapper::RTransform_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RTransform_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RTransform_Wrapper::RTransform_Wrapper(RJSApi& h, RTransform* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RTransform_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RTransform_Wrapper"));
              //setObjectName("RTransform_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RTransform_Wrapper::~RTransform_Wrapper() {
            //RDebug::decCounter(QString("RTransform_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RTransform_Wrapper"));

            //qDebug() << "RTransform_Wrapper::~RTransform_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RTransform";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RTransform_Wrapper::initConnections() {

          //setObjectName("RTransform_Wrapper");

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
  
    // Class: RTransform
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RTransform_Wrapper::RTransform_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RTransform_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RTransform_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RTransform(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RTransform";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RTransform
    // Function: translate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::translate
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dx (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: dy (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTransform* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RTransform* res =
                    &
                w->translate(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: RTransform&

            return RJSHelper_qcad::cpp2js_RTransform(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for translate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: scale
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::scale
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sx (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: sy (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTransform* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RTransform* res =
                    &
                w->scale(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: RTransform&

            return RJSHelper_qcad::cpp2js_RTransform(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for scale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: rotateRadians
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::rotateRadians
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_Qt_Axis(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: angle (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: axis (Qt::Axis)
  
Qt::Axis a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::ZAxis;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_Axis(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTransform* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RTransform* res =
                    &
                w->rotateRadians(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: RTransform&

            return RJSHelper_qcad::cpp2js_RTransform(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rotateRadians";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: rotate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::rotate
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_Qt_Axis(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: angle (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: axis (Qt::Axis)
  
Qt::Axis a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::ZAxis;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_Axis(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RTransform* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RTransform* res =
                    &
                w->rotate(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: RTransform&

            return RJSHelper_qcad::cpp2js_RTransform(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rotate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RTransform
    // Function: getOps
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RTransform_Wrapper::getOps
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
                RTransform* w = getWrapped();
                QList<RTransformOp> res = 
                    
                w->getOps(
                  
                );
              
            // return type: QList<RTransformOp>

            return RJSHelper_qcad::cpp2js_QList_RTransformOp(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getOps";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  