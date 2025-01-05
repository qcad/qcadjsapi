
  // Auto generated
  
  // include header:
  //#include "RGraphicsViewwrapper.h"
  //#include "header_cpp.h"
  
    #include "rgraphicsview_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_RGraphicsView*> RGraphicsView_Wrapper::basecasters_RGraphicsView;
    
    // static functions implementation in singleton wrapper:
    
    void RGraphicsView_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RGraphicsView_Wrapper>("org.qcad", 1, 0, "RGraphicsView_Wrapper");
        qmlRegisterInterface<RGraphicsView_Wrapper>("RGraphicsView_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RGraphicsView* t = new RJSType_RGraphicsView();
          global.setProperty("RJSType_RGraphicsView", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RGraphicsView::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RGraphicsView_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RGraphicsView_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RGraphicsView_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RGraphicsView_BaseJs", mob);
      
      QString fileName = ":generator/js/RGraphicsView.js";
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
    RGraphicsView_Wrapper::RGraphicsView_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RGraphicsView_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RGraphicsView_Wrapper::RGraphicsView_Wrapper(RJSApi& h, RGraphicsView* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RGraphicsView_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RGraphicsView_Wrapper"));
              //setObjectName("RGraphicsView_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RGraphicsView_Wrapper::~RGraphicsView_Wrapper() {
            //RDebug::decCounter(QString("RGraphicsView_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RGraphicsView_Wrapper"));

            //qDebug() << "RGraphicsView_Wrapper::~RGraphicsView_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RGraphicsView";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RGraphicsView_Wrapper::initConnections() {

          //setObjectName("RGraphicsView_Wrapper");

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
    
    // Class: RGraphicsView
    // Function: setViewportNumber
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setViewportNumber
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
    
  // convert js parameter to cpp: n (int)
  
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
                RGraphicsView* w = getWrapped();
                
                w->setViewportNumber(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setViewportNumber";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getViewportNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getViewportNumber
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
                RGraphicsView* w = getWrapped();
                int res = 
                    
                w->getViewportNumber(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getViewportNumber";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::clear
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
                RGraphicsView* w = getWrapped();
                
                w->clear(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: clearCaches
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::clearCaches
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
                RGraphicsView* w = getWrapped();
                
                w->clearCaches(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearCaches";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setDisplayOnlyCurrentUcs
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setDisplayOnlyCurrentUcs
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
                RGraphicsView* w = getWrapped();
                
                w->setDisplayOnlyCurrentUcs(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDisplayOnlyCurrentUcs";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setScene
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setScene
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGraphicsScene_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: scene (RGraphicsScene)
  

          // pointer:
          RGraphicsScene*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGraphicsScene_ptr(handler, a1);
        
  // convert js parameter to cpp: regen (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
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
                RGraphicsView* w = getWrapped();
                
                w->setScene(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setScene";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getScene
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getScene
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
                RGraphicsView* w = getWrapped();
                RGraphicsScene* res = 
                    
                w->getScene(
                  
                );
              
            // return type: RGraphicsScene*

            return RJSHelper_qcad::cpp2js_RGraphicsScene(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getScene";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getDocument
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
                RGraphicsView* w = getWrapped();
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
            
    // Class: RGraphicsView
    // Function: getDocumentInterface
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getDocumentInterface
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
                RGraphicsView* w = getWrapped();
                RDocumentInterface* res = 
                    
                w->getDocumentInterface(
                  
                );
              
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
            
    // Class: RGraphicsView
    // Function: mapFromView
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::mapFromView
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
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_double(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: z (double)
  
double a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0.0;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_double(handler, a2);
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
                RGraphicsView* w = getWrapped();
                RVector res = 
                    
                w->mapFromView(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mapFromView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: mapToView
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::mapToView
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                RVector res = 
                    
                w->mapToView(
                  a1_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: box (RBox)
  
RBox a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                RBox res = 
                    
                w->mapToView(
                  a1_cpp
    
                );
              
            // return type: RBox

            return RJSHelper_qcad::cpp2js_RBox(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mapToView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: mapDistanceFromView
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::mapDistanceFromView
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: d (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                double res = 
                    
                w->mapDistanceFromView(
                  a1_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mapDistanceFromView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: mapDistanceToView
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::mapDistanceToView
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: d (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                double res = 
                    
                w->mapDistanceToView(
                  a1_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mapDistanceToView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: mapCornersFromView
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::mapCornersFromView
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
                RGraphicsView* w = getWrapped();
                QList<RVector> res = 
                    
                w->mapCornersFromView(
                  
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mapCornersFromView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getBox
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getBox
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
                RGraphicsView* w = getWrapped();
                RBox res = 
                    
                w->getBox(
                  
                );
              
            // return type: RBox

            return RJSHelper_qcad::cpp2js_RBox(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBox";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getMinimum
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getMinimum
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
                RGraphicsView* w = getWrapped();
                RVector res = 
                    
                w->getMinimum(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMinimum";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getMaximum
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getMaximum
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
                RGraphicsView* w = getWrapped();
                RVector res = 
                    
                w->getMaximum(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMaximum";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: handleTerminateEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::handleTerminateEvent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTerminateEvent_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: event (RTerminateEvent)
  

          // non copyable:
          RTerminateEvent*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTerminateEvent_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->handleTerminateEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleTerminateEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: handleKeyPressEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::handleKeyPressEvent
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
    
  // convert js parameter to cpp: event (QKeyEvent)
  

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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->handleKeyPressEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleKeyPressEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: handleKeyReleaseEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::handleKeyReleaseEvent
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
    
  // convert js parameter to cpp: event (QKeyEvent)
  

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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->handleKeyReleaseEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleKeyReleaseEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: simulateMouseMoveEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::simulateMouseMoveEvent
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
                RGraphicsView* w = getWrapped();
                
                w->simulateMouseMoveEvent(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for simulateMouseMoveEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: handleMouseMoveEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::handleMouseMoveEvent
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
    
  // convert js parameter to cpp: event (RMouseEvent)
  

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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->handleMouseMoveEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleMouseMoveEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: handleMousePressEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::handleMousePressEvent
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
    
  // convert js parameter to cpp: event (RMouseEvent)
  

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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->handleMousePressEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleMousePressEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: handleMouseReleaseEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::handleMouseReleaseEvent
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
    
  // convert js parameter to cpp: event (RMouseEvent)
  

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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->handleMouseReleaseEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleMouseReleaseEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: handleMouseDoubleClickEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::handleMouseDoubleClickEvent
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
    
  // convert js parameter to cpp: event (RMouseEvent)
  

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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->handleMouseDoubleClickEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleMouseDoubleClickEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: handleWheelEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::handleWheelEvent
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
    
  // convert js parameter to cpp: event (RWheelEvent)
  

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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->handleWheelEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleWheelEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: handleTabletEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::handleTabletEvent
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
    
  // convert js parameter to cpp: event (RTabletEvent)
  

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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->handleTabletEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleTabletEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: handleSwipeGestureEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::handleSwipeGestureEvent
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
    
  // convert js parameter to cpp: gesture (QSwipeGesture)
  

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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->handleSwipeGestureEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handleSwipeGestureEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: handlePanGestureEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::handlePanGestureEvent
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
    
  // convert js parameter to cpp: gesture (QPanGesture)
  

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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->handlePanGestureEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handlePanGestureEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: handlePinchGestureEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::handlePinchGestureEvent
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
    
  // convert js parameter to cpp: gesture (QPinchGesture)
  

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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->handlePinchGestureEvent(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for handlePinchGestureEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: giveFocus
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::giveFocus
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
                RGraphicsView* w = getWrapped();
                
                w->giveFocus(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for giveFocus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: hasFocus
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::hasFocus
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
                RGraphicsView* w = getWrapped();
                bool res = 
                    
                w->hasFocus(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasFocus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: removeFocus
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::removeFocus
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
                RGraphicsView* w = getWrapped();
                
                w->removeFocus(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeFocus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: viewportChangeEvent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::viewportChangeEvent
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
                RGraphicsView* w = getWrapped();
                
                w->viewportChangeEvent(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for viewportChangeEvent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: saveViewport
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::saveViewport
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
                RGraphicsView* w = getWrapped();
                
                w->saveViewport(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for saveViewport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: restoreViewport
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::restoreViewport
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
                RGraphicsView* w = getWrapped();
                
                w->restoreViewport(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for restoreViewport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: zoomIn
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::zoomIn
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_double(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: center (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: factor (double)
  
double a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 1.2;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_double(handler, a2);
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
                RGraphicsView* w = getWrapped();
                
                w->zoomIn(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

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
                RGraphicsView* w = getWrapped();
                
                w->zoomIn(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for zoomIn";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: zoomOut
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::zoomOut
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_double(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: center (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: factor (double)
  
double a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 1.2;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_double(handler, a2);
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
                RGraphicsView* w = getWrapped();
                
                w->zoomOut(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

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
                RGraphicsView* w = getWrapped();
                
                w->zoomOut(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for zoomOut";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: zoom
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::zoom
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: center (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: factor (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->zoom(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for zoom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: zoomTo
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::zoomTo
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: window (RBox)
  
RBox a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
        
  // convert js parameter to cpp: margin (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
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
                RGraphicsView* w = getWrapped();
                
                w->zoomTo(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for zoomTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: zoomPrevious
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::zoomPrevious
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
                RGraphicsView* w = getWrapped();
                
                w->zoomPrevious(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for zoomPrevious";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: autoZoom
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::autoZoom
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
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

   && RJSHelper::is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margin (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_MIN1;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
          }
        
  // convert js parameter to cpp: ignoreEmpty (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
          }
        
  // convert js parameter to cpp: ignoreLineweight (bool)
  
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
                RGraphicsView* w = getWrapped();
                
                w->autoZoom(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for autoZoom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: zoomToSelection
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::zoomToSelection
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margin (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = RDEFAULT_MIN1;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
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
                RGraphicsView* w = getWrapped();
                bool res = 
                    
                w->zoomToSelection(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for zoomToSelection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: zoomToEntities
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::zoomToEntities
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

   && RJSHelper::is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ids (QSet<REntity::Id>)
  
QSet<REntity::Id> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QSet_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: margin (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = RDEFAULT_MIN1;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
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
                RGraphicsView* w = getWrapped();
                bool res = 
                    
                w->zoomToEntities(
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

                  qWarning() << "no matching function variant found for zoomToEntities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: centerToPoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::centerToPoint
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->centerToPoint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for centerToPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: centerToBox
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::centerToBox
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RBox(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: box (RBox)
  
RBox a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->centerToBox(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for centerToBox";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: pan
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::pan
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: delta (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: regen (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
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
                RGraphicsView* w = getWrapped();
                
                w->pan(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for pan";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: startPan
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::startPan
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
                RGraphicsView* w = getWrapped();
                
                w->startPan(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for startPan";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getFactor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getFactor
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
    
  // convert js parameter to cpp: includeStepFactor (bool)
  
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                double res = 
                    
                w->getFactor(
                  a1_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFactor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setFactor
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setFactor
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

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: f (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: regen (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
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
                RGraphicsView* w = getWrapped();
                
                w->setFactor(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFactor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getOffset
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getOffset
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
    
  // convert js parameter to cpp: includeStepOffset (bool)
  
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                RVector res = 
                    
                w->getOffset(
                  a1_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getOffset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setOffset
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setOffset
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: offset (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: regen (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
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
                RGraphicsView* w = getWrapped();
                
                w->setOffset(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOffset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: regenerate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::regenerate
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
    
  // convert js parameter to cpp: force (bool)
  
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
                RGraphicsView* w = getWrapped();
                
                w->regenerate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_QSet_REntity_Id(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: affectedEntities (QSet<REntity::Id>)
  
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
                RGraphicsView* w = getWrapped();
                
                w->regenerate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for regenerate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: repaintView
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::repaintView
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
                RGraphicsView* w = getWrapped();
                
                w->repaintView(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for repaintView";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getWidth
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
                RGraphicsView* w = getWrapped();
                int res = 
                    
                w->getWidth(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getHeight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getHeight
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
                RGraphicsView* w = getWrapped();
                int res = 
                    
                w->getHeight(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: isActive
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::isActive
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
                RGraphicsView* w = getWrapped();
                int res = 
                    
                w->isActive(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isActive";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getSignalsBlocked
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getSignalsBlocked
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
                RGraphicsView* w = getWrapped();
                bool res = 
                    
                w->getSignalsBlocked(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getSignalsBlocked";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setSignalsBlocked
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setSignalsBlocked
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
                RGraphicsView* w = getWrapped();
                
                w->setSignalsBlocked(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSignalsBlocked";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setNavigationAction
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setNavigationAction
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
    
  // convert js parameter to cpp: action (RAction)
  

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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->setNavigationAction(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNavigationAction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getGrid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getGrid
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
                RGraphicsView* w = getWrapped();
                RGrid* res = 
                    
                w->getGrid(
                  
                );
              
            // return type: RGrid*

            return RJSHelper_qcad::cpp2js_RGrid(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getGrid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setGrid
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setGrid
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGrid_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: g (RGrid)
  

          // pointer:
          RGrid*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGrid_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->setGrid(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGrid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setGridVisible
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setGridVisible
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
                RGraphicsView* w = getWrapped();
                
                w->setGridVisible(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGridVisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: isGridVisible
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::isGridVisible
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
                RGraphicsView* w = getWrapped();
                bool res = 
                    
                w->isGridVisible(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isGridVisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: paintGridPoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::paintGridPoint
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->paintGridPoint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for paintGridPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: paintGridLine
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::paintGridLine
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RLine(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (RLine)
  
RLine a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RLine(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->paintGridLine(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for paintGridLine";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getCursor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getCursor
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
                RGraphicsView* w = getWrapped();
                QCursor res = 
                    
                w->getCursor(
                  
                );
              
            // return type: QCursor

            return RJSHelper::cpp2js_QCursor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCursor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setCursor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setCursor
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_CursorShape(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (Qt::CursorShape)
  
Qt::CursorShape a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_CursorShape(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->setCursor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QCursor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QCursor)
  
QCursor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QCursor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->setCursor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCursor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getClosestReferencePoint
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getClosestReferencePoint
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: screenPosition (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: range (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                RRefPoint res = 
                    
                w->getClosestReferencePoint(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: RRefPoint

            return RJSHelper_qcad::cpp2js_RRefPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_REntity_Id(handler, a1
  )

   && RJSHelper_qcad::is_RVector(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: entityId (REntity::Id)
  
REntity::Id a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_REntity_Id(handler, a1);
        
  // convert js parameter to cpp: screenPosition (RVector)
  
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
                RGraphicsView* w = getWrapped();
                RRefPoint res = 
                    
                w->getClosestReferencePoint(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: RRefPoint

            return RJSHelper_qcad::cpp2js_RRefPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getClosestReferencePoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getClosestEntity
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getClosestEntity
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
  a5
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

   && RJSHelper::is_bool(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: screenPosition (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: range (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: strictRange (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: includeLockedLayers (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = true;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        
  // convert js parameter to cpp: selectedOnly (bool)
  
bool a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = false;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_bool(handler, a5);
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
                RGraphicsView* w = getWrapped();
                REntity::Id res = 
                    
                w->getClosestEntity(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            // return type: REntity::Id

            return RJSHelper_qcad::cpp2js_REntity_Id(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getClosestEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setBackgroundColor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setBackgroundColor
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: col (QColor)
  
QColor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QColor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->setBackgroundColor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBackgroundColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getBackgroundColor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getBackgroundColor
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
                RGraphicsView* w = getWrapped();
                QColor res = 
                    
                w->getBackgroundColor(
                  
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getBackgroundColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getMargin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getMargin
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
                RGraphicsView* w = getWrapped();
                int res = 
                    
                w->getMargin(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setMargin
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
                RGraphicsView* w = getWrapped();
                
                w->setMargin(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setExporting
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setExporting
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
                RGraphicsView* w = getWrapped();
                
                w->setExporting(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setExporting";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: isExporting
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::isExporting
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
                RGraphicsView* w = getWrapped();
                bool res = 
                    
                w->isExporting(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isExporting";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: isPrintingOrExporting
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::isPrintingOrExporting
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
                RGraphicsView* w = getWrapped();
                bool res = 
                    
                w->isPrintingOrExporting(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isPrintingOrExporting";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setPrinting
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setPrinting
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
                RGraphicsView* w = getWrapped();
                
                w->setPrinting(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPrinting";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: isPrinting
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::isPrinting
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
                RGraphicsView* w = getWrapped();
                bool res = 
                    
                w->isPrinting(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isPrinting";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setPrintPreview
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setPrintPreview
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
                RGraphicsView* w = getWrapped();
                
                w->setPrintPreview(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPrintPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: isPrintPreview
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::isPrintPreview
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
                RGraphicsView* w = getWrapped();
                bool res = 
                    
                w->isPrintPreview(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isPrintPreview";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setPrintPointSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setPrintPointSize
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->setPrintPointSize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPrintPointSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setColorMode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setColorMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGraphicsView_ColorMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cm (RGraphicsView::ColorMode)
  
RGraphicsView::ColorMode a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGraphicsView_ColorMode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->setColorMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setColorMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getColorMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getColorMode
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
                RGraphicsView* w = getWrapped();
                RGraphicsView::ColorMode res = 
                    
                w->getColorMode(
                  
                );
              
            // return type: RGraphicsView::ColorMode

            return RJSHelper_qcad::cpp2js_RGraphicsView_ColorMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getColorMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setHairlineMode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setHairlineMode
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
                RGraphicsView* w = getWrapped();
                
                w->setHairlineMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHairlineMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getHairlineMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getHairlineMode
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
                RGraphicsView* w = getWrapped();
                bool res = 
                    
                w->getHairlineMode(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getHairlineMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setHairlineMinimumMode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setHairlineMinimumMode
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
                RGraphicsView* w = getWrapped();
                
                w->setHairlineMinimumMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHairlineMinimumMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getHairlineMinimumMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getHairlineMinimumMode
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
                RGraphicsView* w = getWrapped();
                bool res = 
                    
                w->getHairlineMinimumMode(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getHairlineMinimumMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getTextLabels
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getTextLabels
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
                RGraphicsView* w = getWrapped();
                QList<RTextLabel> res = 
                    
                w->getTextLabels(
                  
                );
              
            // return type: QList<RTextLabel>

            return RJSHelper_qcad::cpp2js_QList_RTextLabel(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTextLabels";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: clearTextLabels
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::clearTextLabels
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
                RGraphicsView* w = getWrapped();
                
                w->clearTextLabels(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearTextLabels";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: addTextLabel
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::addTextLabel
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RTextLabel(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: textLabel (RTextLabel)
  
RTextLabel a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RTextLabel(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->addTextLabel(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addTextLabel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getLastKnownMousePosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getLastKnownMousePosition
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
                RGraphicsView* w = getWrapped();
                RVector res = 
                    
                w->getLastKnownMousePosition(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getLastKnownMousePosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getCurrentStepScaleFactor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getCurrentStepScaleFactor
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
                RGraphicsView* w = getWrapped();
                double res = 
                    
                w->getCurrentStepScaleFactor(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentStepScaleFactor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setCurrentStepScaleFactor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setCurrentStepScaleFactor
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: f (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->setCurrentStepScaleFactor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentStepScaleFactor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getCurrentStepOffset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getCurrentStepOffset
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
                RGraphicsView* w = getWrapped();
                RVector res = 
                    
                w->getCurrentStepOffset(
                  
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCurrentStepOffset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setCurrentStepOffset
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setCurrentStepOffset
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RVector(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->setCurrentStepOffset(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentStepOffset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setTextHeightThresholdOverride
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setTextHeightThresholdOverride
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
    
  // convert js parameter to cpp: v (int)
  
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
                RGraphicsView* w = getWrapped();
                
                w->setTextHeightThresholdOverride(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTextHeightThresholdOverride";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getTextHeightThresholdOverride
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getTextHeightThresholdOverride
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
                RGraphicsView* w = getWrapped();
                int res = 
                    
                w->getTextHeightThresholdOverride(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTextHeightThresholdOverride";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: updateTextHeightThreshold
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::updateTextHeightThreshold
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
                RGraphicsView* w = getWrapped();
                
                w->updateTextHeightThreshold(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateTextHeightThreshold";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setForceTextHeightThreshold
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setForceTextHeightThreshold
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
                RGraphicsView* w = getWrapped();
                
                w->setForceTextHeightThreshold(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setForceTextHeightThreshold";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getForceTextHeightThreshold
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getForceTextHeightThreshold
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
                RGraphicsView* w = getWrapped();
                bool res = 
                    
                w->getForceTextHeightThreshold(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getForceTextHeightThreshold";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: isPathVisible
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::isPathVisible
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPainterPath(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: path (RPainterPath)
  
RPainterPath a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPainterPath(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                bool res = 
                    
                w->isPathVisible(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isPathVisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setAntialiasing
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setAntialiasing
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
    
  // convert js parameter to cpp: val (bool)
  
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
                RGraphicsView* w = getWrapped();
                
                w->setAntialiasing(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAntialiasing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getAntialiasing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getAntialiasing
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
                RGraphicsView* w = getWrapped();
                bool res = 
                    
                w->getAntialiasing(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAntialiasing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getDevicePixelRatio
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getDevicePixelRatio
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
                RGraphicsView* w = getWrapped();
                double res = 
                    
                w->getDevicePixelRatio(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getDevicePixelRatio";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: isShared
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::isShared
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
                RGraphicsView* w = getWrapped();
                bool res = 
                    
                w->isShared(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isShared";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: registerForFocus
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::registerForFocus
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
                RGraphicsView* w = getWrapped();
                bool res = 
                    
                w->registerForFocus(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for registerForFocus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: setWidget
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::setWidget
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RGraphicsView* w = getWrapped();
                
                w->setWidget(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWidget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RGraphicsView
    // Function: getWidget
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RGraphicsView_Wrapper::getWidget
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
                RGraphicsView* w = getWrapped();
                QWidget* res = 
                    
                w->getWidget(
                  
                );
              
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getWidget";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rgraphicsview_wrapper.cpp"
  
