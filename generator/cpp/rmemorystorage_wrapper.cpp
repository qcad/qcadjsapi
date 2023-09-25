
  // Auto generated
  
  // include header:
  //#include "RMemoryStoragewrapper.h"
  //#include "header_cpp.h"
  
    #include "rmemorystorage_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: RMemoryStorage
    // Function: getKnownVariableName
    // Source: RStorage
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_WrapperSingleton::getKnownVariableName
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: n (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                RStorage::getKnownVariableName(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getKnownVariableName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RMemoryStorage_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RMemoryStorage_Wrapper>("org.qcad", 1, 0, "RMemoryStorage_Wrapper");
        qmlRegisterInterface<RMemoryStorage_Wrapper>("RMemoryStorage_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RMemoryStorage* t = new RJSType_RMemoryStorage();
          global.setProperty("RJSType_RMemoryStorage", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RMemoryStorage::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RMemoryStorage_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RMemoryStorage_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RMemoryStorage_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RMemoryStorage_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RMemoryStorage_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RMemoryStorage_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RMemoryStorage_WrapperSingleton * s = new RMemoryStorage_WrapperSingleton(handler);
        engine->globalObject().setProperty("RMemoryStorage_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RMemoryStorage.js";
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
    RMemoryStorage_Wrapper::RMemoryStorage_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RMemoryStorage_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RMemoryStorage_Wrapper::RMemoryStorage_Wrapper(RJSApi& h, RMemoryStorage* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RMemoryStorage_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RMemoryStorage_Wrapper"));
              //setObjectName("RMemoryStorage_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RMemoryStorage_Wrapper::~RMemoryStorage_Wrapper() {
            //RDebug::decCounter(QString("RMemoryStorage_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RMemoryStorage_Wrapper"));

            //qDebug() << "RMemoryStorage_Wrapper::~RMemoryStorage_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RMemoryStorage";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RMemoryStorage_Wrapper::initConnections() {

          //setObjectName("RMemoryStorage_Wrapper");

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
  
    // Class: RMemoryStorage
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RMemoryStorage_Wrapper::RMemoryStorage_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RMemoryStorage_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RMemoryStorage_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RMemoryStorage(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RMemoryStorage";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RMemoryStorage
    // Function: setDocument
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setDocument
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
    
  // convert js parameter to cpp: doc (RDocument)
  

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
                RMemoryStorage* w = getWrapped();
                
                w->setDocument(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getDocument
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getDocument
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
                RMemoryStorage* w = getWrapped();
                RDocument* res = 
                    
                w->getDocument(
                  
                );
              
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
            
    // Class: RMemoryStorage
    // Function: orderBackToFront
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::orderBackToFront
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSet_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityIds (QSet<REntity::Id>)
  
QSet<REntity::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSet_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QList<REntity::Id> res = 
                    
                w->orderBackToFront(
                  a1_cpp
    
                );
              
            // return type: QList<REntity::Id>

            return RJSHelper_qcad::cpp2js_QList_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for orderBackToFront";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: sortBlocks
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::sortBlocks
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_RBlock_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockIds (QList<RBlock::Id>)
  
QList<RBlock::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_RBlock_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QList<RBlock::Id> res = 
                    
                w->sortBlocks(
                  a1_cpp
    
                );
              
            // return type: QList<RBlock::Id>

            return RJSHelper_qcad::cpp2js_QList_RBlock_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sortBlocks";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: sortLayers
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::sortLayers
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_RLayer_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerIds (QList<RLayer::Id>)
  
QList<RLayer::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_RLayer_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QList<RLayer::Id> res = 
                    
                w->sortLayers(
                  a1_cpp
    
                );
              
            // return type: QList<RLayer::Id>

            return RJSHelper_qcad::cpp2js_QList_RLayer_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sortLayers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryCurrentLayer
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryCurrentLayer
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
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RLayer> res = 
                    
                w->queryCurrentLayer(
                  
                );
              
            // return type: QSharedPointer<RLayer>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayer(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryCurrentLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryCurrentView
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryCurrentView
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
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RView> res = 
                    
                w->queryCurrentView(
                  
                );
              
            // return type: QSharedPointer<RView>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RView(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryCurrentView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setCurrentLayer
    // Source: RStorage
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setCurrentLayer
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

   && RJSHelper_qcad::is_RTransaction_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        
  // convert js parameter to cpp: transaction (RTransaction)
  

          // pointer:
          RTransaction*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = NULL;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a2);
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
                RMemoryStorage* w = getWrapped();
                
                w->setCurrentLayer(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper_qcad::is_RTransaction_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: transaction (RTransaction)
  

          // pointer:
          RTransaction*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = NULL;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a2);
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
                RMemoryStorage* w = getWrapped();
                
                w->setCurrentLayer(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getCurrentLayerId
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getCurrentLayerId
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
                RMemoryStorage* w = getWrapped();
                RLayer::Id res = 
                    
                w->getCurrentLayerId(
                  
                );
              
            // return type: RLayer::Id

            return RJSHelper_qcad::cpp2js_RLayer_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentLayerId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getCurrentViewId
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getCurrentViewId
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
                RMemoryStorage* w = getWrapped();
                RView::Id res = 
                    
                w->getCurrentViewId(
                  
                );
              
            // return type: RView::Id

            return RJSHelper_qcad::cpp2js_RView_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentViewId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setCurrentColor
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setCurrentColor
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (RColor)
  
RColor a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RColor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->setCurrentColor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getCurrentColor
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getCurrentColor
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
                RMemoryStorage* w = getWrapped();
                RColor res = 
                    
                w->getCurrentColor(
                  
                );
              
            // return type: RColor

            return RJSHelper_qcad::cpp2js_RColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setCurrentLineweight
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setCurrentLineweight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLineweight_Lineweight(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: lw (RLineweight::Lineweight)
  
RLineweight::Lineweight a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLineweight_Lineweight(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->setCurrentLineweight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentLineweight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getCurrentLineweight
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getCurrentLineweight
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
                RMemoryStorage* w = getWrapped();
                RLineweight::Lineweight res = 
                    
                w->getCurrentLineweight(
                  
                );
              
            // return type: RLineweight::Lineweight

            return RJSHelper_qcad::cpp2js_RLineweight_Lineweight(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentLineweight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setCurrentLinetype
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setCurrentLinetype
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLinetype_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ltId (RLinetype::Id)
  
RLinetype::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLinetype_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->setCurrentLinetype(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->setCurrentLinetype(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentLinetype";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setCurrentLinetypePattern
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setCurrentLinetypePattern
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLinetypePattern(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (RLinetypePattern)
  
RLinetypePattern a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLinetypePattern(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->setCurrentLinetypePattern(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentLinetypePattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getCurrentLinetypeId
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getCurrentLinetypeId
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
                RMemoryStorage* w = getWrapped();
                RLinetype::Id res = 
                    
                w->getCurrentLinetypeId(
                  
                );
              
            // return type: RLinetype::Id

            return RJSHelper_qcad::cpp2js_RLinetype_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentLinetypeId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getCurrentLinetypePattern
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getCurrentLinetypePattern
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
                RMemoryStorage* w = getWrapped();
                RLinetypePattern res = 
                    
                w->getCurrentLinetypePattern(
                  
                );
              
            // return type: RLinetypePattern

            return RJSHelper_qcad::cpp2js_RLinetypePattern(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentLinetypePattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryCurrentLinetype
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryCurrentLinetype
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
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RLinetype> res = 
                    
                w->queryCurrentLinetype(
                  
                );
              
            // return type: QSharedPointer<RLinetype>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLinetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryCurrentLinetype";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryCurrentBlock
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryCurrentBlock
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
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RBlock> res = 
                    
                w->queryCurrentBlock(
                  
                );
              
            // return type: QSharedPointer<RBlock>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RBlock(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryCurrentBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getCurrentBlockId
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getCurrentBlockId
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
                RMemoryStorage* w = getWrapped();
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
            
    // Class: RMemoryStorage
    // Function: setCurrentViewport
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setCurrentViewport
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: viewportId (RObject::Id)
  
RObject::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->setCurrentViewport(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentViewport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: unsetCurrentViewport
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::unsetCurrentViewport
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
                RMemoryStorage* w = getWrapped();
                
                w->unsetCurrentViewport(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unsetCurrentViewport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getCurrentViewportId
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getCurrentViewportId
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
                RMemoryStorage* w = getWrapped();
                RObject::Id res = 
                    
                w->getCurrentViewportId(
                  
                );
              
            // return type: RObject::Id

            return RJSHelper_qcad::cpp2js_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentViewportId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setModelSpaceBlockId
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setModelSpaceBlockId
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
                RMemoryStorage* w = getWrapped();
                
                w->setModelSpaceBlockId(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setModelSpaceBlockId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getModelSpaceBlockId
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getModelSpaceBlockId
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
                RMemoryStorage* w = getWrapped();
                RBlock::Id res = 
                    
                w->getModelSpaceBlockId(
                  
                );
              
            // return type: RBlock::Id

            return RJSHelper_qcad::cpp2js_RBlock_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getModelSpaceBlockId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setCurrentView
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setCurrentView
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RView_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: viewId (RView::Id)
  
RView::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RView_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->setCurrentView(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: viewName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->setCurrentView(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setUnit
    // Source: RStorage
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setUnit
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_Unit(handler, a1
  )

   && RJSHelper_qcad::is_RTransaction_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: unit (RS::Unit)
  
RS::Unit a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_Unit(handler, a1);
        
  // convert js parameter to cpp: transaction (RTransaction)
  

          // pointer:
          RTransaction*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = NULL;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a2);
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
                RMemoryStorage* w = getWrapped();
                
                w->setUnit(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUnit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getUnit
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getUnit
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
                RMemoryStorage* w = getWrapped();
                RS::Unit res = 
                    
                w->getUnit(
                  
                );
              
            // return type: RS::Unit

            return RJSHelper_qcad::cpp2js_RS_Unit(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getUnit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setMeasurement
    // Source: RStorage
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setMeasurement
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_Measurement(handler, a1
  )

   && RJSHelper_qcad::is_RTransaction_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: m (RS::Measurement)
  
RS::Measurement a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_Measurement(handler, a1);
        
  // convert js parameter to cpp: transaction (RTransaction)
  

          // pointer:
          RTransaction*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = NULL;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a2);
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
                RMemoryStorage* w = getWrapped();
                
                w->setMeasurement(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMeasurement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getMeasurement
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getMeasurement
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
                RMemoryStorage* w = getWrapped();
                RS::Measurement res = 
                    
                w->getMeasurement(
                  
                );
              
            // return type: RS::Measurement

            return RJSHelper_qcad::cpp2js_RS_Measurement(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMeasurement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setDimensionFont
    // Source: RStorage
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setDimensionFont
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper_qcad::is_RTransaction_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: f (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: transaction (RTransaction)
  

          // pointer:
          RTransaction*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = NULL;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a2);
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
                RMemoryStorage* w = getWrapped();
                
                w->setDimensionFont(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDimensionFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getDimensionFont
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getDimensionFont
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
                RMemoryStorage* w = getWrapped();
                QString res = 
                    
                w->getDimensionFont(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDimensionFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setLinetypeScale
    // Source: RStorage
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setLinetypeScale
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper_qcad::is_RTransaction_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: transaction (RTransaction)
  

          // pointer:
          RTransaction*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = NULL;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a2);
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
                RMemoryStorage* w = getWrapped();
                
                w->setLinetypeScale(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLinetypeScale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getLinetypeScale
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getLinetypeScale
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
                RMemoryStorage* w = getWrapped();
                double res = 
                    
                w->getLinetypeScale(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypeScale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: hasBlock
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::hasBlock
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->hasBlock(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: hasView
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::hasView
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: viewName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->hasView(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setLayer0Id
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setLayer0Id
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: id (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->setLayer0Id(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLayer0Id";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getLayer0Id
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getLayer0Id
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
                RMemoryStorage* w = getWrapped();
                RLayer::Id res = 
                    
                w->getLayer0Id(
                  
                );
              
            // return type: RLayer::Id

            return RJSHelper_qcad::cpp2js_RLayer_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayer0Id";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: hasLayer
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::hasLayer
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->hasLayer(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: hasLayerStates
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::hasLayerStates
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
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->hasLayerStates(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasLayerStates";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: hasLayerState
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::hasLayerState
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerStateName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->hasLayerState(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasLayerState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: hasLayout
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::hasLayout
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layoutName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->hasLayout(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasLayout";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: hasLinetype
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::hasLinetype
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: linetypeName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->hasLinetype(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasLinetype";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: hasVariable
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::hasVariable
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->hasVariable(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasVariable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: isEntity
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::isEntity
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: objectId (RObject::Id)
  
RObject::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isEntity(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: isLayerLocked
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::isLayerLocked
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isLayerLocked(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layer (RLayer)
  

          // non copyable:
          RLayer*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isLayerLocked(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLayerLocked";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: isParentLayerLocked
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::isParentLayerLocked
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isParentLayerLocked(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layer (RLayer)
  

          // non copyable:
          RLayer*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isParentLayerLocked(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isParentLayerLocked";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: isLayerOff
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::isLayerOff
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isLayerOff(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layer (RLayer)
  

          // non copyable:
          RLayer*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isLayerOff(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLayerOff";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: isLayerOffOrFrozen
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::isLayerOffOrFrozen
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isLayerOffOrFrozen(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layer (RLayer)
  

          // non copyable:
          RLayer*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isLayerOffOrFrozen(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLayerOffOrFrozen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: isLayerFrozen
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::isLayerFrozen
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isLayerFrozen(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layer (RLayer)
  

          // non copyable:
          RLayer*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isLayerFrozen(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLayerFrozen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: isParentLayerFrozen
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::isParentLayerFrozen
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isParentLayerFrozen(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layer (RLayer)
  

          // non copyable:
          RLayer*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isParentLayerFrozen(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isParentLayerFrozen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: isLayerSnappable
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::isLayerSnappable
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isLayerSnappable(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layer (RLayer)
  

          // non copyable:
          RLayer*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isLayerSnappable(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLayerSnappable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: isParentLayerSnappable
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::isParentLayerSnappable
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isParentLayerSnappable(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layer (RLayer)
  

          // non copyable:
          RLayer*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isParentLayerSnappable(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isParentLayerSnappable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: isLayerPlottable
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::isLayerPlottable
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isLayerPlottable(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layer (RLayer)
  

          // non copyable:
          RLayer*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isLayerPlottable(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLayerPlottable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: isParentLayerPlottable
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::isParentLayerPlottable
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isParentLayerPlottable(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layer (RLayer)
  

          // non copyable:
          RLayer*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isParentLayerPlottable(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isParentLayerPlottable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: isBlockFrozen
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::isBlockFrozen
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBlock_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockId (RBlock::Id)
  
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
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isBlockFrozen(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isBlockFrozen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: isLayoutBlock
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::isLayoutBlock
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBlock_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockId (RBlock::Id)
  
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
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isLayoutBlock(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLayoutBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setObjectId
    // Source: RStorage
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setObjectId
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_ptr(handler, a1
  )

   && RJSHelper_qcad::is_RObject_Id(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: object (RObject)
  

          // non copyable:
          RObject*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_ptr(handler, a1);
        
  // convert js parameter to cpp: objectId (RObject::Id)
  
RObject::Id a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RObject_Id(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->setObjectId(
                  *a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getLastTransactionId
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getLastTransactionId
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
                RMemoryStorage* w = getWrapped();
                int res = 
                    
                w->getLastTransactionId(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLastTransactionId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: startTransactionGroup
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::startTransactionGroup
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
                RMemoryStorage* w = getWrapped();
                
                w->startTransactionGroup(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for startTransactionGroup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getTransactionGroup
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getTransactionGroup
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
                RMemoryStorage* w = getWrapped();
                int res = 
                    
                w->getTransactionGroup(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTransactionGroup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getNewObjectId
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getNewObjectId
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
                RMemoryStorage* w = getWrapped();
                RObject::Id res = 
                    
                w->getNewObjectId(
                  
                );
              
            // return type: RObject::Id

            return RJSHelper_qcad::cpp2js_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getNewObjectId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getMaxObjectId
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getMaxObjectId
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
                RMemoryStorage* w = getWrapped();
                RObject::Id res = 
                    
                w->getMaxObjectId(
                  
                );
              
            // return type: RObject::Id

            return RJSHelper_qcad::cpp2js_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMaxObjectId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getMaxObjectHandle
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getMaxObjectHandle
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
                RMemoryStorage* w = getWrapped();
                RObject::Handle res = 
                    
                w->getMaxObjectHandle(
                  
                );
              
            // return type: RObject::Handle

            return RJSHelper_qcad::cpp2js_RObject_Handle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMaxObjectHandle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setMaxDrawOrder
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setMaxDrawOrder
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: m (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->setMaxDrawOrder(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMaxDrawOrder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getMaxDrawOrder
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getMaxDrawOrder
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
                RMemoryStorage* w = getWrapped();
                int res = 
                    
                w->getMaxDrawOrder(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMaxDrawOrder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getMinDrawOrder
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getMinDrawOrder
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
                RMemoryStorage* w = getWrapped();
                int res = 
                    
                w->getMinDrawOrder(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMinDrawOrder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: isInBackStorage
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::isInBackStorage
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (RObject::Id)
  
RObject::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isInBackStorage(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isInBackStorage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setModified
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setModified
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: m (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->setModified(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setModified";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: isModified
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::isModified
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
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isModified(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isModified";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getLastModifiedDateTime
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getLastModifiedDateTime
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
                RMemoryStorage* w = getWrapped();
                QDateTime res = 
                    
                w->getLastModifiedDateTime(
                  
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLastModifiedDateTime";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getLastModified
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getLastModified
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
                RMemoryStorage* w = getWrapped();
                QString res = 
                    
                w->getLastModified(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLastModified";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: addModifiedListener
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::addModifiedListener
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RModifiedListener_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (RModifiedListener)
  

          // pointer:
          RModifiedListener*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RModifiedListener_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->addModifiedListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addModifiedListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setNotifyListeners
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setNotifyListeners
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->setNotifyListeners(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNotifyListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getNotifyListeners
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getNotifyListeners
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
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->getNotifyListeners(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getNotifyListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::clear
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
                RMemoryStorage* w = getWrapped();
                
                w->clear(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setCurrentBlock
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setCurrentBlock
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
    
  // convert js parameter to cpp: blockId (RBlock::Id)
  
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
                RMemoryStorage* w = getWrapped();
                
                w->setCurrentBlock(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: beginTransaction
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::beginTransaction
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
                RMemoryStorage* w = getWrapped();
                
                w->beginTransaction(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for beginTransaction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: commitTransaction
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::commitTransaction
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
                RMemoryStorage* w = getWrapped();
                
                w->commitTransaction(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for commitTransaction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: rollbackTransaction
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::rollbackTransaction
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
                RMemoryStorage* w = getWrapped();
                
                w->rollbackTransaction(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for rollbackTransaction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryAllObjects
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryAllObjects
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
                RMemoryStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryAllObjects(
                  
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllObjects";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: querySelectedLayers
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::querySelectedLayers
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
                RMemoryStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->querySelectedLayers(
                  
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for querySelectedLayers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryAllVisibleEntities
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryAllVisibleEntities
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
                RMemoryStorage* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryAllVisibleEntities(
                  
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllVisibleEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryAllEntities
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryAllEntities
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
        RJSHelper::is_bool(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper_qcad::is_RS_EntityType(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: undone (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
          }
        
  // convert js parameter to cpp: allBlocks (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: type (RS::EntityType)
  
RS::EntityType a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RS::EntityAll;
          }
          else {
            a3_cpp = RJSHelper_qcad::js2cpp_RS_EntityType(handler, a3);
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
                RMemoryStorage* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryAllEntities(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
  )

   && RJSHelper_qcad::is_QList_RS_EntityType(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: undone (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        
  // convert js parameter to cpp: allBlocks (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        
  // convert js parameter to cpp: types (QList<RS::EntityType>)
  
QList<RS::EntityType> a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_QList_RS_EntityType(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryAllEntities(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryWorkingSetEntities
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryWorkingSetEntities
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
                RMemoryStorage* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryWorkingSetEntities(
                  
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryWorkingSetEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryAllUcs
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryAllUcs
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
                RMemoryStorage* w = getWrapped();
                QSet<RUcs::Id> res = 
                    
                w->queryAllUcs(
                  
                );
              
            // return type: QSet<RUcs::Id>

            return RJSHelper_qcad::cpp2js_QSet_RUcs_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllUcs";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryAllLayers
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryAllLayers
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
    
  // convert js parameter to cpp: undone (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSet<RLayer::Id> res = 
                    
                w->queryAllLayers(
                  a1_cpp
    
                );
              
            // return type: QSet<RLayer::Id>

            return RJSHelper_qcad::cpp2js_QSet_RLayer_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllLayers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryAllLayerStates
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryAllLayerStates
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: undone (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSet<RLayerState::Id> res = 
                    
                w->queryAllLayerStates(
                  a1_cpp
    
                );
              
            // return type: QSet<RLayerState::Id>

            return RJSHelper_qcad::cpp2js_QSet_RLayerState_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllLayerStates";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryAllBlocks
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryAllBlocks
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
    
  // convert js parameter to cpp: undone (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSet<RBlock::Id> res = 
                    
                w->queryAllBlocks(
                  a1_cpp
    
                );
              
            // return type: QSet<RBlock::Id>

            return RJSHelper_qcad::cpp2js_QSet_RBlock_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllBlocks";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryAllLayoutBlocks
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryAllLayoutBlocks
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: includeModelSpace (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
          }
        
  // convert js parameter to cpp: undone (bool)
  
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSet<RBlock::Id> res = 
                    
                w->queryAllLayoutBlocks(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QSet<RBlock::Id>

            return RJSHelper_qcad::cpp2js_QSet_RBlock_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllLayoutBlocks";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryAllLayouts
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryAllLayouts
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: undone (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSet<RBlock::Id> res = 
                    
                w->queryAllLayouts(
                  a1_cpp
    
                );
              
            // return type: QSet<RBlock::Id>

            return RJSHelper_qcad::cpp2js_QSet_RBlock_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllLayouts";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryAllViews
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryAllViews
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
    
  // convert js parameter to cpp: undone (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = false;
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSet<RView::Id> res = 
                    
                w->queryAllViews(
                  a1_cpp
    
                );
              
            // return type: QSet<RView::Id>

            return RJSHelper_qcad::cpp2js_QSet_RView_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllViews";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryAllLinetypes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryAllLinetypes
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
                RMemoryStorage* w = getWrapped();
                QSet<RLinetype::Id> res = 
                    
                w->queryAllLinetypes(
                  
                );
              
            // return type: QSet<RLinetype::Id>

            return RJSHelper_qcad::cpp2js_QSet_RLinetype_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllLinetypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryInfiniteEntities
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryInfiniteEntities
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
                RMemoryStorage* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryInfiniteEntities(
                  
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryInfiniteEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: querySelectedEntities
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::querySelectedEntities
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
                RMemoryStorage* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->querySelectedEntities(
                  
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for querySelectedEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryLayerEntities
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryLayerEntities
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        
  // convert js parameter to cpp: allBlocks (bool)
  
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryLayerEntities(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryLayerEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: querySelectedLayerEntities
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::querySelectedLayerEntities
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        
  // convert js parameter to cpp: allBlocks (bool)
  
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->querySelectedLayerEntities(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for querySelectedLayerEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: hasBlockEntities
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::hasBlockEntities
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBlock_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockId (RBlock::Id)
  
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
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->hasBlockEntities(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasBlockEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryBlockEntities
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryBlockEntities
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
    
  // convert js parameter to cpp: blockId (RBlock::Id)
  
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
                RMemoryStorage* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryBlockEntities(
                  a1_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryBlockEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryLayerBlockEntities
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryLayerBlockEntities
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

   && RJSHelper_qcad::is_RBlock_Id(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        
  // convert js parameter to cpp: blockId (RBlock::Id)
  
RBlock::Id a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RBlock_Id(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryLayerBlockEntities(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryLayerBlockEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryChildEntities
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryChildEntities
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

   && RJSHelper_qcad::is_RS_EntityType(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parentId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: type (RS::EntityType)
  
RS::EntityType a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RS::EntityAll;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RS_EntityType(handler, a2);
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
                RMemoryStorage* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryChildEntities(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryChildEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: hasChildEntities
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::hasChildEntities
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parentId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->hasChildEntities(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasChildEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryBlockReferences
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryBlockReferences
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBlock_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockId (RBlock::Id)
  
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
                RMemoryStorage* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryBlockReferences(
                  a1_cpp
    
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryBlockReferences";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryAllBlockReferences
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryAllBlockReferences
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
                RMemoryStorage* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryAllBlockReferences(
                  
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllBlockReferences";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryAllViewports
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryAllViewports
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
                RMemoryStorage* w = getWrapped();
                QSet<REntity::Id> res = 
                    
                w->queryAllViewports(
                  
                );
              
            // return type: QSet<REntity::Id>

            return RJSHelper_qcad::cpp2js_QSet_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllViewports";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryDocumentVariables
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryDocumentVariables
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
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RDocumentVariables> res = 
                    
                w->queryDocumentVariables(
                  
                );
              
            // return type: QSharedPointer<RDocumentVariables>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RDocumentVariables(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryDocumentVariables";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryDocumentVariablesDirect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryDocumentVariablesDirect
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
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RDocumentVariables> res = 
                    
                w->queryDocumentVariablesDirect(
                  
                );
              
            // return type: QSharedPointer<RDocumentVariables>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RDocumentVariables(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryDocumentVariablesDirect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryDimStyle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryDimStyle
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
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RDimStyle> res = 
                    
                w->queryDimStyle(
                  
                );
              
            // return type: QSharedPointer<RDimStyle>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RDimStyle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryDimStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryDimStyleDirect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryDimStyleDirect
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
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RDimStyle> res = 
                    
                w->queryDimStyleDirect(
                  
                );
              
            // return type: QSharedPointer<RDimStyle>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RDimStyle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryDimStyleDirect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryObject
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryObject
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: objectId (RObject::Id)
  
RObject::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RObject> res = 
                    
                w->queryObject(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RObject>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RObject(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryObject";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryObjectByHandle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryObjectByHandle
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_Handle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: objectHandle (RObject::Handle)
  
RObject::Handle a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_Handle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RObject> res = 
                    
                w->queryObjectByHandle(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RObject>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RObject(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryObjectByHandle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryObjectByHandleDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryObjectByHandleDirect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_Handle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: objectHandle (RObject::Handle)
  
RObject::Handle a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_Handle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RObject> res = 
                    
                w->queryObjectByHandleDirect(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RObject>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RObject(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryObjectByHandleDirect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryEntity
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: objectId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<REntity> res = 
                    
                w->queryEntity(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<REntity>

            return RJSHelper_qcad::cpp2js_QSharedPointer_REntity(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryLayer
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryLayer
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RLayer> res = 
                    
                w->queryLayer(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLayer>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayer(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RLayer> res = 
                    
                w->queryLayer(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLayer>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayer(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryLayerState
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryLayerState
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayerState_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerStateId (RLayerState::Id)
  
RLayerState::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayerState_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RLayerState> res = 
                    
                w->queryLayerState(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLayerState>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayerState(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerStateName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RLayerState> res = 
                    
                w->queryLayerState(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLayerState>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayerState(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryLayerState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryLayout
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryLayout
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayout_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layoutId (RLayout::Id)
  
RLayout::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayout_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RLayout> res = 
                    
                w->queryLayout(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLayout>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayout(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layoutName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RLayout> res = 
                    
                w->queryLayout(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLayout>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayout(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryLayout";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryBlock
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryBlock
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBlock_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockId (RBlock::Id)
  
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
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RBlock> res = 
                    
                w->queryBlock(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RBlock>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RBlock(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RBlock> res = 
                    
                w->queryBlock(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RBlock>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RBlock(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryBlockDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryBlockDirect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RBlock> res = 
                    
                w->queryBlockDirect(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RBlock>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RBlock(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RBlock_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockId (RBlock::Id)
  
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
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RBlock> res = 
                    
                w->queryBlockDirect(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RBlock>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RBlock(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryBlockDirect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryView
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryView
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RView_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: viewId (RView::Id)
  
RView::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RView_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RView> res = 
                    
                w->queryView(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RView>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RView(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: viewName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RView> res = 
                    
                w->queryView(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RView>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RView(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryUcs
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryUcs
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RUcs_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ucsId (RUcs::Id)
  
RUcs::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RUcs_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RUcs> res = 
                    
                w->queryUcs(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RUcs>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RUcs(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ucsName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RUcs> res = 
                    
                w->queryUcs(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RUcs>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RUcs(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryUcs";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryLinetypeDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryLinetypeDirect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLinetype_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: linetypeId (RLinetype::Id)
  
RLinetype::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLinetype_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RLinetype> res = 
                    
                w->queryLinetypeDirect(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLinetype>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLinetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryLinetypeDirect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryLinetype
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryLinetype
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLinetype_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: linetypeId (RLinetype::Id)
  
RLinetype::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLinetype_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RLinetype> res = 
                    
                w->queryLinetype(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLinetype>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLinetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: linetypeName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RLinetype> res = 
                    
                w->queryLinetype(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLinetype>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLinetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryLinetype";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: clearVisibleCache
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::clearVisibleCache
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
                RMemoryStorage* w = getWrapped();
                
                w->clearVisibleCache(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearVisibleCache";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: updateVisibleCache
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::updateVisibleCache
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
                RMemoryStorage* w = getWrapped();
                
                w->updateVisibleCache(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateVisibleCache";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: clearSelectionCache
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::clearSelectionCache
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
                RMemoryStorage* w = getWrapped();
                
                w->clearSelectionCache(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearSelectionCache";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: updateSelectedEntityMap
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::updateSelectedEntityMap
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
                RMemoryStorage* w = getWrapped();
                
                w->updateSelectedEntityMap(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateSelectedEntityMap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: updateSelectedLayerMap
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::updateSelectedLayerMap
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
                RMemoryStorage* w = getWrapped();
                
                w->updateSelectedLayerMap(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateSelectedLayerMap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: countSelectedEntities
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::countSelectedEntities
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
                RMemoryStorage* w = getWrapped();
                int res = 
                    
                w->countSelectedEntities(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for countSelectedEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: clearEntitySelection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::clearEntitySelection
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
                RMemoryStorage* w = getWrapped();
                
                w->clearEntitySelection(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearEntitySelection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: selectAllEntities
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::selectAllEntities
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
                RMemoryStorage* w = getWrapped();
                
                w->selectAllEntities(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for selectAllEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: selectEntity
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::selectEntity
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: add (bool)
  
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->selectEntity(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for selectEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: deselectEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::deselectEntity
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->deselectEntity(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deselectEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: selectEntities
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::selectEntities
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSet_REntity_Id(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityIds (QSet<REntity::Id>)
  
QSet<REntity::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSet_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: add (bool)
  
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                int res = 
                    
                w->selectEntities(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for selectEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: deselectEntities
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::deselectEntities
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSet_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityIds (QSet<REntity::Id>)
  
QSet<REntity::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSet_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                int res = 
                    
                w->deselectEntities(
                  a1_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for deselectEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setEntitySelected
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setEntitySelected
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSharedPointer_REntity(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entity (QSharedPointer<REntity>)
  
QSharedPointer<REntity> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSharedPointer_REntity(handler, a1);
        
  // convert js parameter to cpp: on (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->setEntitySelected(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEntitySelected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: isSelected
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::isSelected
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isSelected(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSelected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: isSelectedWorkingSet
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::isSelectedWorkingSet
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isSelectedWorkingSet(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSelectedWorkingSet";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: isEntityVisible
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::isEntityVisible
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entity (REntity)
  

          // non copyable:
          REntity*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->isEntityVisible(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEntityVisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: hasSelection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::hasSelection
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
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->hasSelection(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasSelection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getBoundingBox
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getBoundingBox
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ignoreHiddenLayers (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = true;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
          }
        
  // convert js parameter to cpp: ignoreEmpty (bool)
  
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                RBox res = 
                    
                w->getBoundingBox(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: RBox

            return RJSHelper_qcad::cpp2js_RBox(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBoundingBox";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getSelectionBox
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getSelectionBox
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
                RMemoryStorage* w = getWrapped();
                RBox res = 
                    
                w->getSelectionBox(
                  
                );
              
            // return type: RBox

            return RJSHelper_qcad::cpp2js_RBox(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSelectionBox";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getEntitiesBox
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getEntitiesBox
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSet_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ids (QSet<REntity::Id>)
  
QSet<REntity::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSet_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                RBox res = 
                    
                w->getEntitiesBox(
                  a1_cpp
    
                );
              
            // return type: RBox

            return RJSHelper_qcad::cpp2js_RBox(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getEntitiesBox";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: removeObject
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::removeObject
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
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->removeObject(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for removeObject";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: saveObject
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::saveObject
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
        RJSHelper_qcad::is_QSharedPointer_RObject(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: object (QSharedPointer<RObject>)
  
QSharedPointer<RObject> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSharedPointer_RObject(handler, a1);
        
  // convert js parameter to cpp: checkBlockRecursion (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: keepHandles (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = false;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
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
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->saveObject(
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

                  qWarning() << "no matching function variant found for saveObject";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: checkRecursion
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::checkRecursion
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBlock_Id(handler, a1
  )

   && RJSHelper_qcad::is_RBlock_Id(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockId (RBlock::Id)
  
RBlock::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBlock_Id(handler, a1);
        
  // convert js parameter to cpp: potentialChildBlockId (RBlock::Id)
  
RBlock::Id a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RBlock_Id(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->checkRecursion(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for checkRecursion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: deleteObject
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::deleteObject
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: objectId (RObject::Id)
  
RObject::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->deleteObject(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for deleteObject";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: saveTransaction
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::saveTransaction
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTransaction(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: transaction (RTransaction)
  
RTransaction a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTransaction(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->saveTransaction(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for saveTransaction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: deleteTransactionsFrom
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::deleteTransactionsFrom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: transactionId (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->deleteTransactionsFrom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deleteTransactionsFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getTransaction
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getTransaction
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: transactionId (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                RTransaction res = 
                    
                w->getTransaction(
                  a1_cpp
    
                );
              
            // return type: RTransaction

            return RJSHelper_qcad::cpp2js_RTransaction(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTransaction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: resetTransactionStack
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::resetTransactionStack
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
                RMemoryStorage* w = getWrapped();
                
                w->resetTransactionStack(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resetTransactionStack";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: toggleUndoStatus
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::toggleUndoStatus
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QSet_RObject_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: objects (QSet<RObject::Id>)
  
QSet<RObject::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSet_RObject_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->toggleUndoStatus(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: object (RObject::Id)
  
RObject::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->toggleUndoStatus(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for toggleUndoStatus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setUndoStatus
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setUndoStatus
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_Id(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: objectId (RObject::Id)
  
RObject::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_Id(handler, a1);
        
  // convert js parameter to cpp: status (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                bool res = 
                    
                w->setUndoStatus(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_ptr(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: object (RObject)
  

          // non copyable:
          RObject*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_ptr(handler, a1);
        
  // convert js parameter to cpp: status (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->setUndoStatus(
                  *a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUndoStatus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getMaxTransactionId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getMaxTransactionId
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
                RMemoryStorage* w = getWrapped();
                int res = 
                    
                w->getMaxTransactionId(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMaxTransactionId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getVariables
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getVariables
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
                RMemoryStorage* w = getWrapped();
                QStringList res = 
                    
                w->getVariables(
                  
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getVariables";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setVariable
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setVariable
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

   && RJSHelper::is_QVariant(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
        
  // convert js parameter to cpp: overwrite (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = true;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
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
                RMemoryStorage* w = getWrapped();
                
                w->setVariable(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVariable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getVariable
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getVariable
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QVariant res = 
                    
                w->getVariable(
                  a1_cpp
    
                );
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getVariable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: removeVariable
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::removeVariable
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
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->removeVariable(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeVariable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setKnownVariable
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setKnownVariable
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
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

   && RJSHelper::is_QVariant(handler, a2
  )

   && RJSHelper_qcad::is_RTransaction_ptr(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
        
  // convert js parameter to cpp: transaction (RTransaction)
  

          // pointer:
          RTransaction*
         a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = NULL;
          }
          else {
            a3_cpp = RJSHelper_qcad::js2cpp_RTransaction_ptr(handler, a3);
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
                RMemoryStorage* w = getWrapped();
                
                w->setKnownVariable(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setKnownVariable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getKnownVariable
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getKnownVariable
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_KnownVariable(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (RS::KnownVariable)
  
RS::KnownVariable a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_KnownVariable(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QVariant res = 
                    
                w->getKnownVariable(
                  a1_cpp
    
                );
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getKnownVariable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getLayerName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getLayerName
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QString res = 
                    
                w->getLayerName(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayerName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getLayerNames
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getLayerNames
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rxStr (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_QSTRING;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
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
                RMemoryStorage* w = getWrapped();
                QSet<QString> res = 
                    
                w->getLayerNames(
                  a1_cpp
    
                );
              
            // return type: QSet<QString>

            return RJSHelper::cpp2js_QSet_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayerNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getLayerId
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getLayerId
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                RLayer::Id res = 
                    
                w->getLayerId(
                  a1_cpp
    
                );
              
            // return type: RLayer::Id

            return RJSHelper_qcad::cpp2js_RLayer_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayerId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getLayerStateName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getLayerStateName
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayerState_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerStateId (RLayerState::Id)
  
RLayerState::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayerState_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QString res = 
                    
                w->getLayerStateName(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayerStateName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getLayerStateNames
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getLayerStateNames
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rxStr (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_QSTRING;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
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
                RMemoryStorage* w = getWrapped();
                QSet<QString> res = 
                    
                w->getLayerStateNames(
                  a1_cpp
    
                );
              
            // return type: QSet<QString>

            return RJSHelper::cpp2js_QSet_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayerStateNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getLayerStateId
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getLayerStateId
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerStateName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                RLayerState::Id res = 
                    
                w->getLayerStateId(
                  a1_cpp
    
                );
              
            // return type: RLayerState::Id

            return RJSHelper_qcad::cpp2js_RLayerState_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayerStateId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getLayoutName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getLayoutName
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayout_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layoutId (RLayout::Id)
  
RLayout::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayout_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QString res = 
                    
                w->getLayoutName(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayoutName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getLayoutNames
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getLayoutNames
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rxStr (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_QSTRING;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
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
                RMemoryStorage* w = getWrapped();
                QSet<QString> res = 
                    
                w->getLayoutNames(
                  a1_cpp
    
                );
              
            // return type: QSet<QString>

            return RJSHelper::cpp2js_QSet_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayoutNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getLayoutId
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getLayoutId
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layoutName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                RLayout::Id res = 
                    
                w->getLayoutId(
                  a1_cpp
    
                );
              
            // return type: RLayout::Id

            return RJSHelper_qcad::cpp2js_RLayout_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayoutId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getBlockName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getBlockName
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBlock_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockId (RBlock::Id)
  
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
                RMemoryStorage* w = getWrapped();
                QString res = 
                    
                w->getBlockName(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBlockName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getBlockNameFromHandle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getBlockNameFromHandle
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBlock_Handle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockHandle (RBlock::Handle)
  
RBlock::Handle a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBlock_Handle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QString res = 
                    
                w->getBlockNameFromHandle(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBlockNameFromHandle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getBlockNameFromLayout
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getBlockNameFromLayout
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layoutName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QString res = 
                    
                w->getBlockNameFromLayout(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayout_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layoutId (RLayout::Id)
  
RLayout::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayout_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QString res = 
                    
                w->getBlockNameFromLayout(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBlockNameFromLayout";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getBlockNames
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getBlockNames
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rxStr (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_QSTRING;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
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
                RMemoryStorage* w = getWrapped();
                QSet<QString> res = 
                    
                w->getBlockNames(
                  a1_cpp
    
                );
              
            // return type: QSet<QString>

            return RJSHelper::cpp2js_QSet_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBlockNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getBlockId
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getBlockId
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                RBlock::Id res = 
                    
                w->getBlockId(
                  a1_cpp
    
                );
              
            // return type: RBlock::Id

            return RJSHelper_qcad::cpp2js_RBlock_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBlockId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getBlockIdAuto
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getBlockIdAuto
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blockLayoutName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                RBlock::Id res = 
                    
                w->getBlockIdAuto(
                  a1_cpp
    
                );
              
            // return type: RBlock::Id

            return RJSHelper_qcad::cpp2js_RBlock_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBlockIdAuto";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getViewName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getViewName
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RView_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: viewId (RView::Id)
  
RView::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RView_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QString res = 
                    
                w->getViewName(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getViewName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getViewNames
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getViewNames
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
                RMemoryStorage* w = getWrapped();
                QSet<QString> res = 
                    
                w->getViewNames(
                  
                );
              
            // return type: QSet<QString>

            return RJSHelper::cpp2js_QSet_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getViewNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getViewId
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getViewId
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: viewName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                RView::Id res = 
                    
                w->getViewId(
                  a1_cpp
    
                );
              
            // return type: RView::Id

            return RJSHelper_qcad::cpp2js_RView_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getViewId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getLinetypeName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getLinetypeName
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLinetype_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: linetypeId (RLinetype::Id)
  
RLinetype::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLinetype_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QString res = 
                    
                w->getLinetypeName(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypeName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getLinetypeDescription
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getLinetypeDescription
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLinetype_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: linetypeId (RLinetype::Id)
  
RLinetype::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLinetype_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QString res = 
                    
                w->getLinetypeDescription(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypeDescription";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getLinetypeLabel
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getLinetypeLabel
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLinetype_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: linetypeId (RLinetype::Id)
  
RLinetype::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLinetype_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QString res = 
                    
                w->getLinetypeLabel(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypeLabel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getLinetypeNames
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getLinetypeNames
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
                RMemoryStorage* w = getWrapped();
                QSet<QString> res = 
                    
                w->getLinetypeNames(
                  
                );
              
            // return type: QSet<QString>

            return RJSHelper::cpp2js_QSet_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypeNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getLinetypePatterns
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getLinetypePatterns
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
                RMemoryStorage* w = getWrapped();
                QList<RLinetypePattern> res = 
                    
                w->getLinetypePatterns(
                  
                );
              
            // return type: QList<RLinetypePattern>

            return RJSHelper_qcad::cpp2js_QList_RLinetypePattern(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypePatterns";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getLinetypeId
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getLinetypeId
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: linetypeName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                RLinetype::Id res = 
                    
                w->getLinetypeId(
                  a1_cpp
    
                );
              
            // return type: RLinetype::Id

            return RJSHelper_qcad::cpp2js_RLinetype_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypeId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryObjectDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryObjectDirect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: objectId (RObject::Id)
  
RObject::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RObject> res = 
                    
                w->queryObjectDirect(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RObject>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RObject(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryObjectDirect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryObjectCC
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryObjectCC
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: objectId (RObject::Id)
  
RObject::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                RObject* res = 
                    
                w->queryObjectCC(
                  a1_cpp
    
                );
              
            // return type: RObject*

            return RJSHelper_qcad::cpp2js_RObject(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryObjectCC";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryEntityDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryEntityDirect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: objectId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<REntity> res = 
                    
                w->queryEntityDirect(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<REntity>

            return RJSHelper_qcad::cpp2js_QSharedPointer_REntity(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryEntityDirect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryVisibleEntityDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryVisibleEntityDirect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: objectId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<REntity> res = 
                    
                w->queryVisibleEntityDirect(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<REntity>

            return RJSHelper_qcad::cpp2js_QSharedPointer_REntity(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryVisibleEntityDirect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryUcsDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryUcsDirect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RUcs_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ucsId (RUcs::Id)
  
RUcs::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RUcs_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RUcs> res = 
                    
                w->queryUcsDirect(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RUcs>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RUcs(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryUcsDirect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryLayerDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryLayerDirect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayer_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RLayer::Id)
  
RLayer::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RLayer> res = 
                    
                w->queryLayerDirect(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLayer>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayer(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryLayerDirect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryLayerStateDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryLayerStateDirect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayerState_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerStateId (RLayerState::Id)
  
RLayerState::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayerState_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RLayerState> res = 
                    
                w->queryLayerStateDirect(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLayerState>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayerState(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryLayerStateDirect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: queryLayoutDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::queryLayoutDirect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLayout_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layoutId (RLayout::Id)
  
RLayout::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLayout_Id(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                QSharedPointer<RLayout> res = 
                    
                w->queryLayoutDirect(
                  a1_cpp
    
                );
              
            // return type: QSharedPointer<RLayout>

            return RJSHelper_qcad::cpp2js_QSharedPointer_RLayout(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryLayoutDirect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setObjectHandle
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setObjectHandle
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RObject_ptr(handler, a1
  )

   && RJSHelper_qcad::is_RObject_Handle(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: object (RObject)
  

          // non copyable:
          RObject*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_ptr(handler, a1);
        
  // convert js parameter to cpp: objectHandle (RObject::Handle)
  
RObject::Handle a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RObject_Handle(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->setObjectHandle(
                  *a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectHandle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getNewObjectHandle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getNewObjectHandle
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
                RMemoryStorage* w = getWrapped();
                RObject::Handle res = 
                    
                w->getNewObjectHandle(
                  
                );
              
            // return type: RObject::Handle

            return RJSHelper_qcad::cpp2js_RObject_Handle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getNewObjectHandle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setLastTransactionId
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setLastTransactionId
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: transactionId (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->setLastTransactionId(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLastTransactionId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: getMaxLineweight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::getMaxLineweight
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
                RMemoryStorage* w = getWrapped();
                RLineweight::Lineweight res = 
                    
                w->getMaxLineweight(
                  
                );
              
            // return type: RLineweight::Lineweight

            return RJSHelper_qcad::cpp2js_RLineweight_Lineweight(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMaxLineweight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: update
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::update
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
                RMemoryStorage* w = getWrapped();
                
                w->update(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for update";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RMemoryStorage
    // Function: setEntityParentId
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RMemoryStorage_Wrapper::setEntityParentId
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_ptr(handler, a1
  )

   && RJSHelper_qcad::is_REntity_Id(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entity (REntity)
  

          // non copyable:
          REntity*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_ptr(handler, a1);
        
  // convert js parameter to cpp: parentId (REntity::Id)
  
REntity::Id a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RMemoryStorage* w = getWrapped();
                
                w->setEntityParentId(
                  *a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEntityParentId";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  