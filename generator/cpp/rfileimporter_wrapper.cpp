
  // Auto generated
  
  // include header:
  //#include "RFileImporterwrapper.h"
  //#include "header_cpp.h"
  
    #include "rfileimporter_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RFileImporter*> RFileImporter_Wrapper::basecasters_RFileImporter;
    
    // static functions implementation in singleton wrapper:
    
    void RFileImporter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RFileImporter_Wrapper>("org.qcad", 1, 0, "RFileImporter_Wrapper");
        qmlRegisterInterface<RFileImporter_Wrapper>("RFileImporter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RFileImporter* t = new RJSType_RFileImporter();
          global.setProperty("RJSType_RFileImporter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RFileImporter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RFileImporter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RFileImporter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RFileImporter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RFileImporter_BaseJs", mob);
      
      QString fileName = ":generator/js/RFileImporter.js";
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
    RFileImporter_Wrapper::RFileImporter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RFileImporter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RFileImporter_Wrapper::RFileImporter_Wrapper(RJSApi& h, RFileImporter* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RFileImporter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RFileImporter_Wrapper"));
              //setObjectName("RFileImporter_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RFileImporter_Wrapper::~RFileImporter_Wrapper() {
            //RDebug::decCounter(QString("RFileImporter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RFileImporter_Wrapper"));

            //qDebug() << "RFileImporter_Wrapper::~RFileImporter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RFileImporter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RFileImporter_Wrapper::initConnections() {

          //setObjectName("RFileImporter_Wrapper");

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
    
    // Class: RFileImporter
    // Function: startImport
    // Source: RImporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileImporter_Wrapper::startImport
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
                RFileImporter* w = getWrapped();
                
                w->startImport(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for startImport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporter
    // Function: endImport
    // Source: RImporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileImporter_Wrapper::endImport
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
                RFileImporter* w = getWrapped();
                
                w->endImport(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for endImport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporter
    // Function: importObjectP
    // Source: RImporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileImporter_Wrapper::importObjectP
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileImporter* w = getWrapped();
                
                w->importObjectP(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for importObjectP";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporter
    // Function: importObject
    // Source: RImporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileImporter_Wrapper::importObject
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileImporter* w = getWrapped();
                
                w->importObject(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for importObject";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporter
    // Function: setCurrentBlockId
    // Source: RImporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileImporter_Wrapper::setCurrentBlockId
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileImporter* w = getWrapped();
                
                w->setCurrentBlockId(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentBlockId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporter
    // Function: getCurrentBlockId
    // Source: RImporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileImporter_Wrapper::getCurrentBlockId
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
                RFileImporter* w = getWrapped();
                RBlock::Id res = 
                    
                w->getCurrentBlockId(
                  
                );
              
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
            
    // Class: RFileImporter
    // Function: getDocument
    // Source: RImporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RFileImporter_Wrapper::getDocument
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
                RFileImporter* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      RDocument* res =
                    &
                w->getDocument(
                  
                );
              
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
            
    // Class: RFileImporter
    // Function: setDocument
    // Source: RImporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RFileImporter_Wrapper::setDocument
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileImporter* w = getWrapped();
                
                w->setDocument(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporter
    // Function: setKnownVariable
    // Source: RImporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RFileImporter_Wrapper::setKnownVariable
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileImporter* w = getWrapped();
                
                w->setKnownVariable(
                  a1_cpp
    , a2_cpp
    
                );
              
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileImporter* w = getWrapped();
                
                w->setKnownVariable(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setKnownVariable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RFileImporter
    // Function: importFile
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RFileImporter_Wrapper::importFile
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RFileImporter* w = getWrapped();
                bool res = 
                    
                w->importFile(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
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
  
    #include "moc_rfileimporter_wrapper.cpp"
  
