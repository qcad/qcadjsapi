
  // Auto generated
  
  // include header:
  //#include "RActionAdapterwrapper.h"
  //#include "header_cpp.h"
  
    #include "ractionadapter_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RActionAdapter*> RActionAdapter_Wrapper::basecasters_RActionAdapter;
    
    // static functions implementation in singleton wrapper:
    
    void RActionAdapter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RActionAdapter_Wrapper>("org.qcad", 1, 0, "RActionAdapter_Wrapper");
        qmlRegisterInterface<RActionAdapter_Wrapper>("RActionAdapter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RActionAdapter* t = new RJSType_RActionAdapter();
          global.setProperty("RJSType_RActionAdapter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RActionAdapter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RActionAdapter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RActionAdapter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RActionAdapter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RActionAdapter_BaseJs", mob);
      
      QString fileName = ":generator/js/RActionAdapter.js";
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
    RActionAdapter_Wrapper::RActionAdapter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RActionAdapter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RActionAdapter_Wrapper::RActionAdapter_Wrapper(RJSApi& h, RActionAdapter* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RActionAdapter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RActionAdapter_Wrapper"));
              //setObjectName("RActionAdapter_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RActionAdapter_Wrapper::~RActionAdapter_Wrapper() {
            //RDebug::decCounter(QString("RActionAdapter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RActionAdapter_Wrapper"));

            //qDebug() << "RActionAdapter_Wrapper::~RActionAdapter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RActionAdapter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RActionAdapter_Wrapper::initConnections() {

          //setObjectName("RActionAdapter_Wrapper");

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
  
    // Class: RActionAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RActionAdapter_Wrapper::RActionAdapter_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RActionAdapter_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RActionAdapter_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGuiAction_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: guiAction (RGuiAction)
  

          // pointer:
          RGuiAction*
         a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = NULL;
          }
          else {
            a1_cpp = RJSHelper_qcad::js2cpp_RGuiAction_ptr(handler, a1);
          }
        

    // call function:
    
        // construct wrapper:

        
                wrapped = new RActionAdapter_Base(
                  handler
                  
                    ,
                  a1_cpp
    
                );
                wrappedCreated = true;

                // set handler for wrapped base object:
                //((RActionAdapter_Base*)wrapped)->setHandler(handler);

                // store self to call into JS:
                ((RActionAdapter_Base*)wrapped)->self = handler.getSelf();
              

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
                  

                  qWarning() << "no matching constructor variant found for RActionAdapter";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RActionAdapter
    // Function: terminate
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper::terminate
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RActionAdapter* w = getWrapped();
                
                w->terminate(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for terminate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: isTerminated
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper::isTerminated
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RActionAdapter* w = getWrapped();
                bool res = 
                    
                w->isTerminated(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTerminated";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: setOverride
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper::setOverride
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RActionAdapter* w = getWrapped();
                
                w->setOverride(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOverride";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: isOverride
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      isOverrideSuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::isOverride: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->isOverrideSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->isOverride(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isOverride";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: setNoState
    // Source: RAction
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper::setNoState
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = true;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RActionAdapter* w = getWrapped();
                
                w->setNoState(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNoState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: hasNoState
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper::hasNoState
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RActionAdapter* w = getWrapped();
                bool res = 
                    
                w->hasNoState(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasNoState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: setUniqueGroup
    // Source: RAction
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper::setUniqueGroup
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ug (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RActionAdapter* w = getWrapped();
                
                w->setUniqueGroup(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUniqueGroup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: getUniqueGroup
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper::getUniqueGroup
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RActionAdapter* w = getWrapped();
                QString res = 
                    
                w->getUniqueGroup(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getUniqueGroup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: setOverrideBase
    // Source: RAction
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper::setOverrideBase
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RAction_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: base (RAction)
  

          // pointer:
          RAction*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RAction_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RActionAdapter* w = getWrapped();
                
                w->setOverrideBase(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOverrideBase";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: getOverrideBase
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper::getOverrideBase
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RActionAdapter* w = getWrapped();
                RAction* res = 
                    
                w->getOverrideBase(
                  
                );
              
                //setRecFlag(false);
              
            // return type: RAction*

            return RJSHelper_qcad::cpp2js_RAction(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getOverrideBase";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: getGuiAction
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper::getGuiAction
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RActionAdapter* w = getWrapped();
                RGuiAction* res = 
                    
                w->getGuiAction(
                  
                );
              
                //setRecFlag(false);
              
            // return type: RGuiAction*

            return RJSHelper_qcad::cpp2js_RGuiAction(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getGuiAction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: setGuiAction
    // Source: RAction
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper::setGuiAction
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGuiAction_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: guiAction (RGuiAction)
  

          // pointer:
          RGuiAction*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGuiAction_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RActionAdapter* w = getWrapped();
                
                w->setGuiAction(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGuiAction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: getGraphicsScenes
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper::getGraphicsScenes
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RActionAdapter* w = getWrapped();
                QList<RGraphicsScene*> res = 
                    
                w->getGraphicsScenes(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QList<RGraphicsScene*>

            return RJSHelper_qcad::cpp2js_QList_RGraphicsScene_ptr(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getGraphicsScenes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: getDocument
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      getDocumentSuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::getDocument: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                RDocument* res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->getDocumentSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->getDocument(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: RDocument*

            return RJSHelper_qcad::cpp2js_RDocument(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: getDocumentInterface
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      getDocumentInterfaceSuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::getDocumentInterface: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                RDocumentInterface* res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->getDocumentInterfaceSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->getDocumentInterface(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: RDocumentInterface*

            return RJSHelper_qcad::cpp2js_RDocumentInterface(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDocumentInterface";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: getStorage
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper::getStorage
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RActionAdapter* w = getWrapped();
                RStorage* res = 
                    
                w->getStorage(
                  
                );
              
                //setRecFlag(false);
              
            // return type: RStorage*

            return RJSHelper_qcad::cpp2js_RStorage(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getStorage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: setDocumentInterface
    // Source: RAction
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      setDocumentInterfaceSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: di (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::setDocumentInterface: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->setDocumentInterfaceSup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->setDocumentInterface(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDocumentInterface";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: setClickMode
    // Source: RAction
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper::setClickMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RAction_ClickMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: m (RAction::ClickMode)
  
RAction::ClickMode a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RAction_ClickMode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RActionAdapter* w = getWrapped();
                
                w->setClickMode(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setClickMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: getClickMode
    // Source: RAction
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper::getClickMode
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RActionAdapter* w = getWrapped();
                RAction::ClickMode res = 
                    
                w->getClickMode(
                  
                );
              
                //setRecFlag(false);
              
            // return type: RAction::ClickMode

            return RJSHelper_qcad::cpp2js_RAction_ClickMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getClickMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: snap
    // Source: RAction
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper::snap
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMouseEvent_ptr(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RMouseEvent)
  

          // non copyable:
          RMouseEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMouseEvent_ptr(handler, a1);
        
  // convert js parameter to cpp: preview (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RActionAdapter* w = getWrapped();
                RVector res = 
                    
                w->snap(
                  *a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for snap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: getState
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      getStateSuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::getState: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                int res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->getStateSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->getState(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: beginEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      beginEventSuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::beginEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->beginEventSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->beginEvent(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for beginEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: setGraphicsView
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      setGraphicsViewSuper
                    
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
    
  // convert js parameter to cpp:  (RGraphicsView)
  

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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::setGraphicsView: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->setGraphicsViewSup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->setGraphicsView(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGraphicsView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: finishEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      finishEventSuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::finishEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->finishEventSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->finishEvent(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for finishEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: enterEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      enterEventSuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::enterEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->enterEventSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->enterEvent(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for enterEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: suspendEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      suspendEventSuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::suspendEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->suspendEventSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->suspendEvent(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for suspendEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: resumeEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      resumeEventSuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::resumeEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->resumeEventSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->resumeEvent(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resumeEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: escapeEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      escapeEventSuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::escapeEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->escapeEventSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->escapeEvent(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for escapeEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: keyPressEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      keyPressEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QKeyEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QKeyEvent)
  

          // non copyable:
          QKeyEvent*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QKeyEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::keyPressEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->keyPressEventSup(
                        *a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->keyPressEvent(
                        *a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for keyPressEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: keyReleaseEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      keyReleaseEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QKeyEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QKeyEvent)
  

          // non copyable:
          QKeyEvent*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QKeyEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::keyReleaseEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->keyReleaseEventSup(
                        *a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->keyReleaseEvent(
                        *a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for keyReleaseEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: mousePressEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      mousePressEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMouseEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (RMouseEvent)
  

          // non copyable:
          RMouseEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMouseEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::mousePressEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->mousePressEventSup(
                        *a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->mousePressEvent(
                        *a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for mousePressEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: mouseMoveEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      mouseMoveEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMouseEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (RMouseEvent)
  

          // non copyable:
          RMouseEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMouseEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::mouseMoveEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->mouseMoveEventSup(
                        *a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->mouseMoveEvent(
                        *a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for mouseMoveEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: mouseReleaseEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      mouseReleaseEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMouseEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (RMouseEvent)
  

          // non copyable:
          RMouseEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMouseEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::mouseReleaseEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->mouseReleaseEventSup(
                        *a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->mouseReleaseEvent(
                        *a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for mouseReleaseEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: mouseDoubleClickEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      mouseDoubleClickEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RMouseEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (RMouseEvent)
  

          // non copyable:
          RMouseEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RMouseEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::mouseDoubleClickEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->mouseDoubleClickEventSup(
                        *a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->mouseDoubleClickEvent(
                        *a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for mouseDoubleClickEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: wheelEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      wheelEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RWheelEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (RWheelEvent)
  

          // non copyable:
          RWheelEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RWheelEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::wheelEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->wheelEventSup(
                        *a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->wheelEvent(
                        *a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for wheelEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: tabletEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      tabletEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTabletEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (RTabletEvent)
  

          // non copyable:
          RTabletEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTabletEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::tabletEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->tabletEventSup(
                        *a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->tabletEvent(
                        *a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for tabletEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: swipeGestureEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      swipeGestureEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSwipeGesture_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QSwipeGesture)
  

          // non copyable:
          QSwipeGesture*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSwipeGesture_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::swipeGestureEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->swipeGestureEventSup(
                        *a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->swipeGestureEvent(
                        *a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swipeGestureEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: panGestureEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      panGestureEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPanGesture_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QPanGesture)
  

          // non copyable:
          QPanGesture*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPanGesture_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::panGestureEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->panGestureEventSup(
                        *a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->panGestureEvent(
                        *a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for panGestureEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: pinchGestureEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      pinchGestureEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPinchGesture_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QPinchGesture)
  

          // non copyable:
          QPinchGesture*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPinchGesture_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::pinchGestureEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->pinchGestureEventSup(
                        *a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->pinchGestureEvent(
                        *a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for pinchGestureEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: commandEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      commandEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RCommandEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (RCommandEvent)
  

          // non copyable:
          RCommandEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RCommandEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::commandEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->commandEventSup(
                        *a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->commandEvent(
                        *a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for commandEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: commandEventPreview
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      commandEventPreviewSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RCommandEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (RCommandEvent)
  

          // non copyable:
          RCommandEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RCommandEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::commandEventPreview: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->commandEventPreviewSup(
                        *a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->commandEventPreview(
                        *a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for commandEventPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: coordinateEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      coordinateEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RCoordinateEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (RCoordinateEvent)
  

          // non copyable:
          RCoordinateEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RCoordinateEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::coordinateEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->coordinateEventSup(
                        *a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->coordinateEvent(
                        *a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for coordinateEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: coordinateEventPreview
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      coordinateEventPreviewSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RCoordinateEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (RCoordinateEvent)
  

          // non copyable:
          RCoordinateEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RCoordinateEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::coordinateEventPreview: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->coordinateEventPreviewSup(
                        *a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->coordinateEventPreview(
                        *a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for coordinateEventPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: entityPickEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      entityPickEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntityPickEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (REntityPickEvent)
  

          // non copyable:
          REntityPickEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntityPickEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::entityPickEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->entityPickEventSup(
                        *a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->entityPickEvent(
                        *a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for entityPickEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: entityPickEventPreview
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      entityPickEventPreviewSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntityPickEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (REntityPickEvent)
  

          // non copyable:
          REntityPickEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntityPickEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::entityPickEventPreview: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->entityPickEventPreviewSup(
                        *a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->entityPickEventPreview(
                        *a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for entityPickEventPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: propertyChangeEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      propertyChangeEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPropertyEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (RPropertyEvent)
  

          // non copyable:
          RPropertyEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPropertyEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::propertyChangeEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->propertyChangeEventSup(
                        *a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->propertyChangeEvent(
                        *a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for propertyChangeEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: zoomChangeEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      zoomChangeEventSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGraphicsView_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (RGraphicsView)
  

          // non copyable:
          RGraphicsView*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGraphicsView_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::zoomChangeEvent: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->zoomChangeEventSup(
                        *a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->zoomChangeEvent(
                        *a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for zoomChangeEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: updatePreview
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      updatePreviewSuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::updatePreview: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->updatePreviewSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->updatePreview(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updatePreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RActionAdapter
    // Function: applyOperation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RActionAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      applyOperationSuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RActionAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RActionAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RActionAdapter::applyOperation: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->applyOperationSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->applyOperation(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for applyOperation";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_ractionadapter_wrapper.cpp"
  
