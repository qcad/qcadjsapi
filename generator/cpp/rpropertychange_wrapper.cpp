
  // Auto generated
  
  // include header:
  //#include "RPropertyChangewrapper.h"
  //#include "header_cpp.h"
  
    #include "rpropertychange_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RPropertyChange*> RPropertyChange_Wrapper::basecasters_RPropertyChange;
    
    // static functions implementation in singleton wrapper:
    
    void RPropertyChange_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RPropertyChange_Wrapper>("org.qcad", 1, 0, "RPropertyChange_Wrapper");
        qmlRegisterInterface<RPropertyChange_Wrapper>("RPropertyChange_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RPropertyChange* t = new RJSType_RPropertyChange();
          global.setProperty("RJSType_RPropertyChange", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RPropertyChange::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RPropertyChange_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RPropertyChange_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RPropertyChange_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RPropertyChange_BaseJs", mob);
      
      QString fileName = ":generator/js/RPropertyChange.js";
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
    RPropertyChange_Wrapper::RPropertyChange_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RPropertyChange_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RPropertyChange_Wrapper::RPropertyChange_Wrapper(RJSApi& h, RPropertyChange* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RPropertyChange_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RPropertyChange_Wrapper"));
              //setObjectName("RPropertyChange_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RPropertyChange_Wrapper::~RPropertyChange_Wrapper() {
            //RDebug::decCounter(QString("RPropertyChange_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RPropertyChange_Wrapper"));

            //qDebug() << "RPropertyChange_Wrapper::~RPropertyChange_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of RPropertyChange";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void RPropertyChange_Wrapper::initConnections() {

          //setObjectName("RPropertyChange_Wrapper");

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
  
    // Class: RPropertyChange
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1
RPropertyChange_Wrapper::RPropertyChange_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RPropertyChange_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RPropertyChange_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPropertyTypeId(handler, a1
  )

   && RJSHelper::is_QVariant(handler, a2
  )

   && RJSHelper::is_QVariant(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyTypeId (RPropertyTypeId)
  
RPropertyTypeId a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPropertyTypeId(handler, a1);
        
  // convert js parameter to cpp: oldValue (QVariant)
  
QVariant a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
        
  // convert js parameter to cpp: newValue (QVariant)
  
QVariant a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QVariant(handler, a3);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new RPropertyChange(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
              );
              wrappedCreated = true;
            

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      {
    

    // call function:
    
        // construct wrapper:

        
              wrapped = new RPropertyChange(
                  
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
   && a2.isUndefined()
   && a3.isUndefined()
  
                      ) {
                      
                        wrapped = nullptr;
                      
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for RPropertyChange";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RPropertyChange
    // Function: setOldValue
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPropertyChange_Wrapper::setOldValue
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QVariant(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v (QVariant)
  
QVariant a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QVariant(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RPropertyChange* w = getWrapped();
                
                w->setOldValue(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOldValue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyChange
    // Function: getOldValue
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyChange_Wrapper::getOldValue
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
                RPropertyChange* w = getWrapped();
                QVariant res = 
                    
                w->getOldValue(
                  
                );
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getOldValue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyChange
    // Function: setNewValue
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPropertyChange_Wrapper::setNewValue
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QVariant(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v (QVariant)
  
QVariant a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QVariant(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RPropertyChange* w = getWrapped();
                
                w->setNewValue(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNewValue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyChange
    // Function: getNewValue
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyChange_Wrapper::getNewValue
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
                RPropertyChange* w = getWrapped();
                QVariant res = 
                    
                w->getNewValue(
                  
                );
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getNewValue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyChange
    // Function: setPropertyTypeId
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPropertyChange_Wrapper::setPropertyTypeId
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPropertyTypeId(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: id (RPropertyTypeId)
  
RPropertyTypeId a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPropertyTypeId(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RPropertyChange* w = getWrapped();
                
                w->setPropertyTypeId(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPropertyTypeId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyChange
    // Function: getPropertyTypeId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyChange_Wrapper::getPropertyTypeId
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
                RPropertyChange* w = getWrapped();
                RPropertyTypeId res = 
                    
                w->getPropertyTypeId(
                  
                );
              
            // return type: RPropertyTypeId

            return RJSHelper_qcad::cpp2js_RPropertyTypeId(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPropertyTypeId";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rpropertychange_wrapper.cpp"
  
