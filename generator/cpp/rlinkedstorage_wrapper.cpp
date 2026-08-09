
  // Auto generated
  
  // include header:
  //#include "RLinkedStoragewrapper.h"
  //#include "header_cpp.h"
  
    #include "rlinkedstorage_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RLinkedStorage*> RLinkedStorage_Wrapper::basecasters_RLinkedStorage;
    
    // static functions implementation in singleton wrapper:
    
    void RLinkedStorage_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RLinkedStorage_Wrapper>("org.qcad", 1, 0, "RLinkedStorage_Wrapper");
        qmlRegisterInterface<RLinkedStorage_Wrapper>("RLinkedStorage_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RLinkedStorage* t = new RJSType_RLinkedStorage();
          global.setProperty("RJSType_RLinkedStorage", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RLinkedStorage::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RLinkedStorage_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RLinkedStorage_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RLinkedStorage_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RLinkedStorage_BaseJs", mob);
      
      QString fileName = ":generator/js/RLinkedStorage.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    RLinkedStorage_Wrapper::RLinkedStorage_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RLinkedStorage_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RLinkedStorage_Wrapper::RLinkedStorage_Wrapper(RJSApi& h, RLinkedStorage* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RLinkedStorage_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RLinkedStorage_Wrapper"));
              //setObjectName("RLinkedStorage_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RLinkedStorage_Wrapper::~RLinkedStorage_Wrapper() {
            //RDebug::decCounter(QString("RLinkedStorage_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RLinkedStorage_Wrapper"));

            //qDebug() << "RLinkedStorage_Wrapper::~RLinkedStorage_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RLinkedStorage";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RLinkedStorage_Wrapper::initConnections() {

          //setObjectName("RLinkedStorage_Wrapper");

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
  
    // Class: RLinkedStorage
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
RLinkedStorage_Wrapper::RLinkedStorage_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RLinkedStorage_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RLinkedStorage_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RStorage_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: backStorage (RStorage)
  

          // non copyable:
          RStorage*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RStorage_ptr(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new RLinkedStorage(
                  *a1_cpp
    
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
                  

                  qWarning() << "no matching constructor variant found for RLinkedStorage";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RLinkedStorage
    // Function: setDocument
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setDocument
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
                RLinkedStorage* w = getWrapped();
                
                w->setDocument(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: getDocument
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getDocument
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: orderBackToFront
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::orderBackToFront
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: sortBlocks
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::sortBlocks
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: sortLayers
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::sortLayers
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryCurrentLayer
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryCurrentLayer
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryCurrentView
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryCurrentView
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: setCurrentLayer
    // Source: RStorage
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setCurrentLayer
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
                RLinkedStorage* w = getWrapped();
                
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
                RLinkedStorage* w = getWrapped();
                
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
            
    // Class: RLinkedStorage
    // Function: setCurrentColor
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setCurrentColor
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
                RLinkedStorage* w = getWrapped();
                
                w->setCurrentColor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: setCurrentLineweight
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setCurrentLineweight
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
                RLinkedStorage* w = getWrapped();
                
                w->setCurrentLineweight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentLineweight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: setCurrentLinetype
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setCurrentLinetype
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
                RLinkedStorage* w = getWrapped();
                
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
                RLinkedStorage* w = getWrapped();
                
                w->setCurrentLinetype(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentLinetype";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: setCurrentLinetypePattern
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setCurrentLinetypePattern
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
                RLinkedStorage* w = getWrapped();
                
                w->setCurrentLinetypePattern(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentLinetypePattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: getCurrentLinetypePattern
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getCurrentLinetypePattern
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryCurrentLinetype
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryCurrentLinetype
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryCurrentBlock
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryCurrentBlock
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: setCurrentViewport
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setCurrentViewport
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
                RLinkedStorage* w = getWrapped();
                
                w->setCurrentViewport(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentViewport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: unsetCurrentViewport
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::unsetCurrentViewport
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
                RLinkedStorage* w = getWrapped();
                
                w->unsetCurrentViewport(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unsetCurrentViewport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: getCurrentViewportId
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getCurrentViewportId
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: setModelSpaceBlockId
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setModelSpaceBlockId
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
                RLinkedStorage* w = getWrapped();
                
                w->setModelSpaceBlockId(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setModelSpaceBlockId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: getModelSpaceBlockId
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getModelSpaceBlockId
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: setCurrentView
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setCurrentView
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
                RLinkedStorage* w = getWrapped();
                
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
                RLinkedStorage* w = getWrapped();
                
                w->setCurrentView(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: setUnit
    // Source: RStorage
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setUnit
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
                RLinkedStorage* w = getWrapped();
                
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
            
    // Class: RLinkedStorage
    // Function: getUnit
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getUnit
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: setMeasurement
    // Source: RStorage
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setMeasurement
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
                RLinkedStorage* w = getWrapped();
                
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
            
    // Class: RLinkedStorage
    // Function: getMeasurement
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getMeasurement
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: setDimensionFont
    // Source: RStorage
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setDimensionFont
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
                RLinkedStorage* w = getWrapped();
                
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
            
    // Class: RLinkedStorage
    // Function: setLinetypeScale
    // Source: RStorage
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setLinetypeScale
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
                RLinkedStorage* w = getWrapped();
                
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
            
    // Class: RLinkedStorage
    // Function: getLinetypeScale
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getLinetypeScale
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: hasBlock
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::hasBlock
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: hasView
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::hasView
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: setLayer0Id
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setLayer0Id
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
                RLinkedStorage* w = getWrapped();
                
                w->setLayer0Id(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLayer0Id";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: getLayer0Id
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getLayer0Id
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: hasLayer
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::hasLayer
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: hasLayerStates
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::hasLayerStates
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: hasLayerState
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::hasLayerState
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: hasLayout
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::hasLayout
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: hasLinetype
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::hasLinetype
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: hasVariable
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::hasVariable
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: isEntity
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::isEntity
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: isLayerLocked
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::isLayerLocked
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
                RLinkedStorage* w = getWrapped();
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: isParentLayerLocked
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::isParentLayerLocked
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
                RLinkedStorage* w = getWrapped();
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: isLayerOff
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::isLayerOff
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
                RLinkedStorage* w = getWrapped();
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: isLayerOffOrFrozen
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::isLayerOffOrFrozen
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
                RLinkedStorage* w = getWrapped();
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: isLayerFrozen
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::isLayerFrozen
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
                RLinkedStorage* w = getWrapped();
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: isParentLayerFrozen
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::isParentLayerFrozen
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
                RLinkedStorage* w = getWrapped();
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: isLayerSnappable
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::isLayerSnappable
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
                RLinkedStorage* w = getWrapped();
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: isParentLayerSnappable
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::isParentLayerSnappable
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
                RLinkedStorage* w = getWrapped();
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: isLayerPlottable
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::isLayerPlottable
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
                RLinkedStorage* w = getWrapped();
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: isParentLayerPlottable
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::isParentLayerPlottable
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
                RLinkedStorage* w = getWrapped();
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: isBlockFrozen
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::isBlockFrozen
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: isLayoutBlock
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::isLayoutBlock
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: setObjectId
    // Source: RStorage
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setObjectId
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
                RLinkedStorage* w = getWrapped();
                
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
            
    // Class: RLinkedStorage
    // Function: getLastTransactionId
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getLastTransactionId
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: startTransactionGroup
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::startTransactionGroup
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
                RLinkedStorage* w = getWrapped();
                
                w->startTransactionGroup(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for startTransactionGroup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: getTransactionGroup
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getTransactionGroup
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getMaxObjectId
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getMaxObjectId
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getMaxObjectHandle
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getMaxObjectHandle
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: setMaxDrawOrder
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setMaxDrawOrder
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
                RLinkedStorage* w = getWrapped();
                
                w->setMaxDrawOrder(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMaxDrawOrder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: getMaxDrawOrder
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getMaxDrawOrder
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getMinDrawOrder
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getMinDrawOrder
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: setModified
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setModified
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
                RLinkedStorage* w = getWrapped();
                
                w->setModified(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setModified";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: isModified
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::isModified
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getLastModifiedDateTime
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getLastModifiedDateTime
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getLastModified
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getLastModified
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: addModifiedListener
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::addModifiedListener
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
                RLinkedStorage* w = getWrapped();
                
                w->addModifiedListener(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addModifiedListener";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: setNotifyListeners
    // Source: RStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setNotifyListeners
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
                RLinkedStorage* w = getWrapped();
                
                w->setNotifyListeners(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNotifyListeners";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: getNotifyListeners
    // Source: RStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getNotifyListeners
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: setCurrentBlock
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setCurrentBlock
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
                RLinkedStorage* w = getWrapped();
                
                w->setCurrentBlock(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentBlock";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: beginTransaction
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::beginTransaction
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
                RLinkedStorage* w = getWrapped();
                
                w->beginTransaction(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for beginTransaction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: commitTransaction
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::commitTransaction
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
                RLinkedStorage* w = getWrapped();
                
                w->commitTransaction(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for commitTransaction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: rollbackTransaction
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::rollbackTransaction
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
                RLinkedStorage* w = getWrapped();
                
                w->rollbackTransaction(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for rollbackTransaction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: queryWorkingSetEntities
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryWorkingSetEntities
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryObjectByHandleDirect
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryObjectByHandleDirect
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: clearVisibleCache
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::clearVisibleCache
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
                RLinkedStorage* w = getWrapped();
                
                w->clearVisibleCache(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearVisibleCache";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: updateVisibleCache
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::updateVisibleCache
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
                RLinkedStorage* w = getWrapped();
                
                w->updateVisibleCache(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateVisibleCache";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: clearSelectionCache
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::clearSelectionCache
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
                RLinkedStorage* w = getWrapped();
                
                w->clearSelectionCache(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearSelectionCache";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: updateSelectedEntityMap
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::updateSelectedEntityMap
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
                RLinkedStorage* w = getWrapped();
                
                w->updateSelectedEntityMap(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateSelectedEntityMap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: updateSelectedLayerMap
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::updateSelectedLayerMap
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
                RLinkedStorage* w = getWrapped();
                
                w->updateSelectedLayerMap(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateSelectedLayerMap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: countSelectedEntities
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::countSelectedEntities
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: clearEntitySelection
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::clearEntitySelection
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
                RLinkedStorage* w = getWrapped();
                
                w->clearEntitySelection(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearEntitySelection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: selectAllEntities
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::selectAllEntities
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
                RLinkedStorage* w = getWrapped();
                
                w->selectAllEntities(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for selectAllEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: selectEntity
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::selectEntity
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
                RLinkedStorage* w = getWrapped();
                
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
            
    // Class: RLinkedStorage
    // Function: deselectEntity
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::deselectEntity
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
                RLinkedStorage* w = getWrapped();
                
                w->deselectEntity(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deselectEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: selectEntities
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::selectEntities
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: deselectEntities
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::deselectEntities
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: setEntitySelected
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setEntitySelected
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
                RLinkedStorage* w = getWrapped();
                
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
            
    // Class: RLinkedStorage
    // Function: isSelected
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::isSelected
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: isSelectedWorkingSet
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::isSelectedWorkingSet
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: isEntityVisible
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::isEntityVisible
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: hasSelection
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::hasSelection
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getBoundingBox
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getBoundingBox
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getSelectionBox
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getSelectionBox
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getEntitiesBox
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getEntitiesBox
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: removeObject
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::removeObject
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: saveObject
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::saveObject
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: checkRecursion
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::checkRecursion
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: saveTransaction
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::saveTransaction
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
                RLinkedStorage* w = getWrapped();
                
                w->saveTransaction(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for saveTransaction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: deleteTransactionsFrom
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::deleteTransactionsFrom
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
                RLinkedStorage* w = getWrapped();
                
                w->deleteTransactionsFrom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deleteTransactionsFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: getTransaction
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getTransaction
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: resetTransactionStack
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::resetTransactionStack
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
                RLinkedStorage* w = getWrapped();
                
                w->resetTransactionStack(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resetTransactionStack";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: toggleUndoStatus
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::toggleUndoStatus
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
                RLinkedStorage* w = getWrapped();
                
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
                RLinkedStorage* w = getWrapped();
                
                w->toggleUndoStatus(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for toggleUndoStatus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: getMaxTransactionId
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getMaxTransactionId
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getVariables
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getVariables
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: setVariable
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setVariable
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
                RLinkedStorage* w = getWrapped();
                
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
            
    // Class: RLinkedStorage
    // Function: getVariable
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getVariable
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: removeVariable
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::removeVariable
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
                RLinkedStorage* w = getWrapped();
                
                w->removeVariable(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeVariable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: setKnownVariable
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setKnownVariable
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
                RLinkedStorage* w = getWrapped();
                
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
            
    // Class: RLinkedStorage
    // Function: getLayerStateName
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getLayerStateName
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getLayerStateNames
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getLayerStateNames
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getLayerStateId
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getLayerStateId
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryVisibleEntityDirect
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryVisibleEntityDirect
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: setObjectHandle
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setObjectHandle
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
                RLinkedStorage* w = getWrapped();
                
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
            
    // Class: RLinkedStorage
    // Function: setLastTransactionId
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setLastTransactionId
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
                RLinkedStorage* w = getWrapped();
                
                w->setLastTransactionId(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLastTransactionId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: getMaxLineweight
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getMaxLineweight
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: update
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::update
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
                RLinkedStorage* w = getWrapped();
                
                w->update(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for update";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: setEntityParentId
    // Source: RMemoryStorage
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setEntityParentId
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
                RLinkedStorage* w = getWrapped();
                
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
            
    // Class: RLinkedStorage
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::clear
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
                RLinkedStorage* w = getWrapped();
                
                w->clear(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: clearLinked
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::clearLinked
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
                RLinkedStorage* w = getWrapped();
                
                w->clearLinked(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearLinked";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: queryAllObjects
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryAllObjects
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: querySelectedLayers
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::querySelectedLayers
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryAllVisibleEntities
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryAllVisibleEntities
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
                RLinkedStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryAllVisibleEntities(
                  
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllVisibleEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: queryAllEntities
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryAllEntities
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
                RLinkedStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryAllEntities(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
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
                RLinkedStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryAllEntities(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: queryAllUcs
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryAllUcs
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
                RLinkedStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryAllUcs(
                  
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllUcs";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: queryAllLayers
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryAllLayers
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
                RLinkedStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryAllLayers(
                  a1_cpp
    
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllLayers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: queryAllLayerStates
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryAllLayerStates
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
                RLinkedStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryAllLayerStates(
                  a1_cpp
    
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllLayerStates";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: queryAllBlocks
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryAllBlocks
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
                RLinkedStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryAllBlocks(
                  a1_cpp
    
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllBlocks";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: queryAllLayoutBlocks
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryAllLayoutBlocks
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
                RLinkedStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryAllLayoutBlocks(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllLayoutBlocks";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: queryAllLayouts
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryAllLayouts
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
                RLinkedStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryAllLayouts(
                  a1_cpp
    
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllLayouts";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: queryAllViews
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryAllViews
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
                RLinkedStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryAllViews(
                  a1_cpp
    
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllViews";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: queryAllLinetypes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryAllLinetypes
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
                RLinkedStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryAllLinetypes(
                  
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllLinetypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: queryInfiniteEntities
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryInfiniteEntities
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
                RLinkedStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryInfiniteEntities(
                  
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryInfiniteEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: querySelectedEntities
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::querySelectedEntities
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
                RLinkedStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->querySelectedEntities(
                  
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for querySelectedEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: queryLayerEntities
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryLayerEntities
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RObject::Id)
  
RObject::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_Id(handler, a1);
        
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
                RLinkedStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryLayerEntities(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryLayerEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: querySelectedLayerEntities
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::querySelectedLayerEntities
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RObject::Id)
  
RObject::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_Id(handler, a1);
        
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
                RLinkedStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->querySelectedLayerEntities(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for querySelectedLayerEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: hasBlockEntities
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::hasBlockEntities
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
    
  // convert js parameter to cpp: blockId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryBlockEntities
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryBlockEntities
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
    
  // convert js parameter to cpp: blockId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryBlockEntities(
                  a1_cpp
    
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryBlockEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: queryLayerBlockEntities
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryLayerBlockEntities
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

   && RJSHelper_qcad::is_RObject_Id(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layerId (RObject::Id)
  
RObject::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_Id(handler, a1);
        
  // convert js parameter to cpp: blockId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryLayerBlockEntities(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryLayerBlockEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: queryChildEntities
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryChildEntities
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

   && RJSHelper_qcad::is_RS_EntityType(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parentId (RObject::Id)
  
RObject::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_Id(handler, a1);
        
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
                RLinkedStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryChildEntities(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryChildEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: hasChildEntities
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::hasChildEntities
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
    
  // convert js parameter to cpp: parentId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryBlockReferences
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryBlockReferences
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
    
  // convert js parameter to cpp: blockId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryBlockReferences(
                  a1_cpp
    
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryBlockReferences";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: queryAllBlockReferences
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryAllBlockReferences
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
                RLinkedStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryAllBlockReferences(
                  
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllBlockReferences";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: queryAllViewports
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryAllViewports
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
                RLinkedStorage* w = getWrapped();
                QSet<RObject::Id> res = 
                    
                w->queryAllViewports(
                  
                );
              
            // return type: QSet<RObject::Id>

            return RJSHelper_qcad::cpp2js_QSet_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryAllViewports";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: queryDocumentVariablesDirect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryDocumentVariablesDirect
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryDocumentVariables
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryDocumentVariables
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryDimStyle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryDimStyle
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryDimStyleDirect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryDimStyleDirect
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryObjectDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryObjectDirect
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryObjectCC
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryObjectCC
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryObject
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryObject
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryObjectByHandle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryObjectByHandle
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryEntityDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryEntityDirect
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryEntity
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryLayerDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryLayerDirect
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
    
  // convert js parameter to cpp: layerId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryLayer
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryLayer
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
    
  // convert js parameter to cpp: layerId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryLayerStateDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryLayerStateDirect
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
    
  // convert js parameter to cpp: layerStateId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryLayerState
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryLayerState
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
    
  // convert js parameter to cpp: layerStateId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryLayoutDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryLayoutDirect
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
    
  // convert js parameter to cpp: layoutId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryLayout
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryLayout
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
    
  // convert js parameter to cpp: layoutId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryBlockDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryBlockDirect
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
    
  // convert js parameter to cpp: blockId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryBlock
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryBlock
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
    
  // convert js parameter to cpp: blockId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryView
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryView
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
    
  // convert js parameter to cpp: viewId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryUcsDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryUcsDirect
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
    
  // convert js parameter to cpp: ucsId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryUcs
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryUcs
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
    
  // convert js parameter to cpp: ucsId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryLinetypeDirect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryLinetypeDirect
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
    
  // convert js parameter to cpp: linetypeId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: queryLinetype
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::queryLinetype
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
    
  // convert js parameter to cpp: linetypeId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getLayerName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getLayerName
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
    
  // convert js parameter to cpp: layerId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getLayerNames
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getLayerNames
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getLayerId
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getLayerId
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
                RLinkedStorage* w = getWrapped();
                RObject::Id res = 
                    
                w->getLayerId(
                  a1_cpp
    
                );
              
            // return type: RObject::Id

            return RJSHelper_qcad::cpp2js_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayerId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: getLayoutName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getLayoutName
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
    
  // convert js parameter to cpp: layoutId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getLayoutNames
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getLayoutNames
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getLayoutId
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getLayoutId
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
                RLinkedStorage* w = getWrapped();
                RObject::Id res = 
                    
                w->getLayoutId(
                  a1_cpp
    
                );
              
            // return type: RObject::Id

            return RJSHelper_qcad::cpp2js_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLayoutId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: getBlockName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getBlockName
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
    
  // convert js parameter to cpp: blockId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getBlockNameFromHandle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getBlockNameFromHandle
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
    
  // convert js parameter to cpp: blockHandle (RObject::Handle)
  
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getBlockNameFromLayout
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getBlockNameFromLayout
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
                RLinkedStorage* w = getWrapped();
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
        RJSHelper_qcad::is_RObject_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: layoutId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getBlockNames
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getBlockNames
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
        RJSHelper::is_QString(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
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
                RLinkedStorage* w = getWrapped();
                QSet<QString> res = 
                    
                w->getBlockNames(
                  a1_cpp
    , a2_cpp
    
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
            
    // Class: RLinkedStorage
    // Function: getBlockId
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getBlockId
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
                RLinkedStorage* w = getWrapped();
                RObject::Id res = 
                    
                w->getBlockId(
                  a1_cpp
    
                );
              
            // return type: RObject::Id

            return RJSHelper_qcad::cpp2js_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBlockId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: getBlockIdAuto
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getBlockIdAuto
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
                RLinkedStorage* w = getWrapped();
                RObject::Id res = 
                    
                w->getBlockIdAuto(
                  a1_cpp
    
                );
              
            // return type: RObject::Id

            return RJSHelper_qcad::cpp2js_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBlockIdAuto";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: getViewName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getViewName
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
    
  // convert js parameter to cpp: viewId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getViewNames
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getViewNames
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getViewId
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getViewId
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
                RLinkedStorage* w = getWrapped();
                RObject::Id res = 
                    
                w->getViewId(
                  a1_cpp
    
                );
              
            // return type: RObject::Id

            return RJSHelper_qcad::cpp2js_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getViewId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: getLinetypeName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getLinetypeName
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
    
  // convert js parameter to cpp: linetypeId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getLinetypeDescription
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getLinetypeDescription
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
    
  // convert js parameter to cpp: linetypeId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getLinetypeLabel
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getLinetypeLabel
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
    
  // convert js parameter to cpp: linetypeId (RObject::Id)
  
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getLinetypeNames
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getLinetypeNames
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getLinetypePatterns
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getLinetypePatterns
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getLinetypeId
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getLinetypeId
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
                RLinkedStorage* w = getWrapped();
                RObject::Id res = 
                    
                w->getLinetypeId(
                  a1_cpp
    
                );
              
            // return type: RObject::Id

            return RJSHelper_qcad::cpp2js_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLinetypeId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: getNewObjectId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getNewObjectId
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getNewObjectHandle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getNewObjectHandle
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getCurrentLayerId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getCurrentLayerId
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
                RLinkedStorage* w = getWrapped();
                RObject::Id res = 
                    
                w->getCurrentLayerId(
                  
                );
              
            // return type: RObject::Id

            return RJSHelper_qcad::cpp2js_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentLayerId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: getCurrentBlockId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getCurrentBlockId
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
                RLinkedStorage* w = getWrapped();
                RObject::Id res = 
                    
                w->getCurrentBlockId(
                  
                );
              
            // return type: RObject::Id

            return RJSHelper_qcad::cpp2js_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentBlockId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: getCurrentViewId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getCurrentViewId
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
                RLinkedStorage* w = getWrapped();
                RObject::Id res = 
                    
                w->getCurrentViewId(
                  
                );
              
            // return type: RObject::Id

            return RJSHelper_qcad::cpp2js_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentViewId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: getCurrentColor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getCurrentColor
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getCurrentLineweight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getCurrentLineweight
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getCurrentLinetypeId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getCurrentLinetypeId
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
                RLinkedStorage* w = getWrapped();
                RObject::Id res = 
                    
                w->getCurrentLinetypeId(
                  
                );
              
            // return type: RObject::Id

            return RJSHelper_qcad::cpp2js_RObject_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentLinetypeId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: deleteObject
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::deleteObject
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: setUndoStatus
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::setUndoStatus
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
                RLinkedStorage* w = getWrapped();
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

                  qWarning() << "no matching function variant found for setUndoStatus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RLinkedStorage
    // Function: getDimensionFont
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getDimensionFont
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getKnownVariable
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getKnownVariable
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: isInBackStorage
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::isInBackStorage
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
                RLinkedStorage* w = getWrapped();
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
            
    // Class: RLinkedStorage
    // Function: getBackStorage
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RLinkedStorage_Wrapper::getBackStorage
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
                RLinkedStorage* w = getWrapped();
                RStorage* res = 
                    
                w->getBackStorage(
                  
                );
              
            // return type: RStorage*

            return RJSHelper_qcad::cpp2js_RStorage(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBackStorage";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rlinkedstorage_wrapper.cpp"
  
