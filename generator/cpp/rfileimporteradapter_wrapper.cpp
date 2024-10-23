
  // Auto generated
  
  // include header:
  //#include "RFileImporterAdapterwrapper.h"
  //#include "header_cpp.h"
  
    #include "rfileimporteradapter_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RFileImporterAdapter*> RFileImporterAdapter_Wrapper::basecasters_RFileImporterAdapter;
    
    // static functions implementation in singleton wrapper:
    
    void RFileImporterAdapter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RFileImporterAdapter_Wrapper>("org.qcad", 1, 0, "RFileImporterAdapter_Wrapper");
        qmlRegisterInterface<RFileImporterAdapter_Wrapper>("RFileImporterAdapter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RFileImporterAdapter* t = new RJSType_RFileImporterAdapter();
          global.setProperty("RJSType_RFileImporterAdapter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RFileImporterAdapter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RFileImporterAdapter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RFileImporterAdapter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RFileImporterAdapter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RFileImporterAdapter_BaseJs", mob);
      
      QString fileName = ":generator/js/RFileImporterAdapter.js";
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
    RFileImporterAdapter_Wrapper::RFileImporterAdapter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RFileImporterAdapter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RFileImporterAdapter_Wrapper::RFileImporterAdapter_Wrapper(RJSApi& h, RFileImporterAdapter* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RFileImporterAdapter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RFileImporterAdapter_Wrapper"));
              //setObjectName("RFileImporterAdapter_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RFileImporterAdapter_Wrapper::~RFileImporterAdapter_Wrapper() {
            //RDebug::decCounter(QString("RFileImporterAdapter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RFileImporterAdapter_Wrapper"));

            //qDebug() << "RFileImporterAdapter_Wrapper::~RFileImporterAdapter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RFileImporterAdapter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RFileImporterAdapter_Wrapper::initConnections() {

          //setObjectName("RFileImporterAdapter_Wrapper");

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
  
    // Class: RFileImporterAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1
RFileImporterAdapter_Wrapper::RFileImporterAdapter_Wrapper
                
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
                
                  //RDebug::incCounter(QString("RFileImporterAdapter_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RFileImporterAdapter_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
  )

   && RJSHelper_qcad::is_RMessageHandler_ptr(handler, a2
    , true
  
  )

   && RJSHelper_qcad::is_RProgressHandler_ptr(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: document (RDocument)
  

          // non copyable:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        
  // convert js parameter to cpp: messageHandler (RMessageHandler)
  

          // pointer:
          RMessageHandler*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = NULL;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RMessageHandler_ptr(handler, a2);
          }
        
  // convert js parameter to cpp: progressHandler (RProgressHandler)
  

          // pointer:
          RProgressHandler*
         a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = NULL;
          }
          else {
            a3_cpp = RJSHelper_qcad::js2cpp_RProgressHandler_ptr(handler, a3);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new RFileImporterAdapter_Base(
              handler
              
                ,
              *a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
            wrappedCreated = true;

            // set handler for wrapped base object:
            //((RFileImporterAdapter_Base*)wrapped)->setHandler(handler);

            // store self to call into JS:
            ((RFileImporterAdapter_Base*)wrapped)->self = handler.getSelf();
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RFileImporterAdapter_Base(
              handler
              
            );
            wrappedCreated = true;

            // set handler for wrapped base object:
            //((RFileImporterAdapter_Base*)wrapped)->setHandler(handler);

            // store self to call into JS:
            ((RFileImporterAdapter_Base*)wrapped)->self = handler.getSelf();
          

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
                  

                  qWarning() << "no matching constructor variant found for RFileImporterAdapter";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RFileImporterAdapter
    // Function: startImport
    // Source: RImporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileImporterAdapter_Wrapper::startImport
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
                RFileImporterAdapter* w = getWrapped();
                
                w->startImport(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for startImport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporterAdapter
    // Function: endImport
    // Source: RImporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileImporterAdapter_Wrapper::endImport
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
                RFileImporterAdapter* w = getWrapped();
                
                w->endImport(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for endImport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporterAdapter
    // Function: importObjectP
    // Source: RImporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileImporterAdapter_Wrapper::importObjectP
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSharedPointer_RObject(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: object (QSharedPointer<RObject>)
  
QSharedPointer<RObject> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSharedPointer_RObject(handler, a1);
        

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
                RFileImporterAdapter* w = getWrapped();
                
                w->importObjectP(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for importObjectP";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporterAdapter
    // Function: importObject
    // Source: RImporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileImporterAdapter_Wrapper::importObject
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: object (RObject)
  

          // pointer:
          RObject*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_ptr(handler, a1);
        

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
                RFileImporterAdapter* w = getWrapped();
                
                w->importObject(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for importObject";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporterAdapter
    // Function: setCurrentBlockId
    // Source: RImporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileImporterAdapter_Wrapper::setCurrentBlockId
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBlock_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: id (RBlock::Id)
  
RBlock::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBlock_Id(handler, a1);
        

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
                RFileImporterAdapter* w = getWrapped();
                
                w->setCurrentBlockId(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentBlockId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporterAdapter
    // Function: getCurrentBlockId
    // Source: RImporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileImporterAdapter_Wrapper::getCurrentBlockId
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
                RFileImporterAdapter* w = getWrapped();
                RBlock::Id res = 
                    
                w->getCurrentBlockId(
                  
                );
              
                //setRecFlag(false);
              
            // return type: RBlock::Id

            return RJSHelper_qcad::cpp2js_RBlock_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentBlockId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporterAdapter
    // Function: getDocument
    // Source: RImporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileImporterAdapter_Wrapper::getDocument
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
                RFileImporterAdapter* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RDocument* res =
                    &
                w->getDocument(
                  
                );
              
                //setRecFlag(false);
              
            // return type: RDocument&

            return RJSHelper_qcad::cpp2js_RDocument(
              handler, 
              // non-copyable: true
                  // return type is reference, type is not copyable:
                  // convert using pointer:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporterAdapter
    // Function: setDocument
    // Source: RImporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileImporterAdapter_Wrapper::setDocument
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: d (RDocument)
  

          // pointer:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        

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
                RFileImporterAdapter* w = getWrapped();
                
                w->setDocument(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporterAdapter
    // Function: setKnownVariable
    // Source: RImporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileImporterAdapter_Wrapper::setKnownVariable
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

   && RJSHelper::is_QVariant(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
        

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
                RFileImporterAdapter* w = getWrapped();
                
                w->setKnownVariable(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        
  // convert js parameter to cpp: value (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        

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
                RFileImporterAdapter* w = getWrapped();
                
                w->setKnownVariable(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setKnownVariable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporterAdapter
    // Function: importFile
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RFileImporterAdapter_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      importFileSuper
                    
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
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QVariantMap(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: nameFilter (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: params (QVariantMap)
  
QVariantMap a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RDEFAULT_QVARIANTMAP;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QVariantMap(handler, a3);
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
            
                // call function of RFileImporterAdapter_Base class as 
                // function has postfix inheritable class, overridable function):
                RFileImporterAdapter_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RFileImporterAdapter::importFile: using base but wrapper is not of type of base class";
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
                      wb->importFileSup(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->importFile(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    
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

                  qWarning() << "no matching function variant found for importFile";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rfileimporteradapter_wrapper.cpp"
  
