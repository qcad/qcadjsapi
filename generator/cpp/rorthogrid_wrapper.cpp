
  // Auto generated
  
  // include header:
  //#include "ROrthoGridwrapper.h"
  //#include "header_cpp.h"
  
    #include "rorthogrid_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_ROrthoGrid*> ROrthoGrid_Wrapper::basecasters_ROrthoGrid;
    
    // static functions implementation in singleton wrapper:
    
    // Class: ROrthoGrid
    // Function: getIdealGridSpacing
    // Source: 
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              ROrthoGrid_WrapperSingleton::getIdealGridSpacing
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGraphicsView_ptr(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper_qcad::is_RVector(handler, a3
  )

   && RJSHelper_qcad::is_RVector(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: view (RGraphicsView)
  

          // non copyable:
          RGraphicsView*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGraphicsView_ptr(handler, a1);
        
  // convert js parameter to cpp: minPixelSpacing (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: minSpacing (RVector)
  
RVector a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a3);
        
  // convert js parameter to cpp: minMetaSpacing (RVector)
  
RVector a4_cpp;

      a4_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a4);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<RVector> res = 
                
                // call static member function:
                ROrthoGrid::getIdealGridSpacing(
              *a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIdealGridSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROrthoGrid
    // Function: isFractionalFormat
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              ROrthoGrid_WrapperSingleton::isFractionalFormat
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_LinearFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: linearFormat (RS::LinearFormat)
  
RS::LinearFormat a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_LinearFormat(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                ROrthoGrid::isFractionalFormat(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isFractionalFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void ROrthoGrid_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<ROrthoGrid_Wrapper>("org.qcad", 1, 0, "ROrthoGrid_Wrapper");
        qmlRegisterInterface<ROrthoGrid_Wrapper>("ROrthoGrid_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_ROrthoGrid* t = new RJSType_ROrthoGrid();
          global.setProperty("RJSType_ROrthoGrid", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_ROrthoGrid::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&ROrthoGrid_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("ROrthoGrid_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&ROrthoGrid_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("ROrthoGrid_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&ROrthoGrid_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("ROrthoGrid_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        ROrthoGrid_WrapperSingleton * s = new ROrthoGrid_WrapperSingleton(handler);
        engine->globalObject().setProperty("ROrthoGrid_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/ROrthoGrid.js";
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
    ROrthoGrid_Wrapper::ROrthoGrid_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("ROrthoGrid_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      ROrthoGrid_Wrapper::ROrthoGrid_Wrapper(RJSApi& h, ROrthoGrid* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("ROrthoGrid_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("ROrthoGrid_Wrapper"));
              //setObjectName("ROrthoGrid_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      ROrthoGrid_Wrapper::~ROrthoGrid_Wrapper() {
            //RDebug::decCounter(QString("ROrthoGrid_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("ROrthoGrid_Wrapper"));

            //qDebug() << "ROrthoGrid_Wrapper::~ROrthoGrid_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of ROrthoGrid";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void ROrthoGrid_Wrapper::initConnections() {

          //setObjectName("ROrthoGrid_Wrapper");

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
  
    // Class: ROrthoGrid
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
ROrthoGrid_Wrapper::ROrthoGrid_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("ROrthoGrid_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("ROrthoGrid_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RGraphicsView_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: view (RGraphicsView)
  

          // non copyable:
          RGraphicsView*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RGraphicsView_ptr(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new ROrthoGrid(
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
                  

                  qWarning() << "no matching constructor variant found for ROrthoGrid";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: ROrthoGrid
    // Function: getViewportNumber
    // Source: RGrid
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              ROrthoGrid_Wrapper::getViewportNumber
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
                ROrthoGrid* w = getWrapped();
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
            
    // Class: ROrthoGrid
    // Function: getDocument
    // Source: RGrid
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              ROrthoGrid_Wrapper::getDocument
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
                ROrthoGrid* w = getWrapped();
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
            
    // Class: ROrthoGrid
    // Function: setVisible
    // Source: RGrid
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              ROrthoGrid_Wrapper::setVisible
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
                ROrthoGrid* w = getWrapped();
                
                w->setVisible(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROrthoGrid
    // Function: isVisible
    // Source: RGrid
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              ROrthoGrid_Wrapper::isVisible
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
                ROrthoGrid* w = getWrapped();
                bool res = 
                    
                w->isVisible(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isVisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROrthoGrid
    // Function: clearCache
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              ROrthoGrid_Wrapper::clearCache
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
                ROrthoGrid* w = getWrapped();
                
                w->clearCache(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearCache";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROrthoGrid
    // Function: snapToGrid
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              ROrthoGrid_Wrapper::snapToGrid
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
    
  // convert js parameter to cpp: positionUcs (RVector)
  
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
                ROrthoGrid* w = getWrapped();
                RVector res = 
                    
                w->snapToGrid(
                  a1_cpp
    
                );
              
            // return type: RVector

            return RJSHelper_qcad::cpp2js_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for snapToGrid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROrthoGrid
    // Function: update
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              ROrthoGrid_Wrapper::update
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
                ROrthoGrid* w = getWrapped();
                
                w->update(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for update";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROrthoGrid
    // Function: paint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              ROrthoGrid_Wrapper::paint
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
                ROrthoGrid* w = getWrapped();
                
                w->paint(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for paint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROrthoGrid
    // Function: paintMetaGrid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              ROrthoGrid_Wrapper::paintMetaGrid
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
                ROrthoGrid* w = getWrapped();
                
                w->paintMetaGrid(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for paintMetaGrid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROrthoGrid
    // Function: paintGridLines
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              ROrthoGrid_Wrapper::paintGridLines
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
        RJSHelper_qcad::is_RVector(handler, a1
  )

   && RJSHelper_qcad::is_RBox(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: space (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: box (RBox)
  
RBox a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a2);
        
  // convert js parameter to cpp: meta (bool)
  
bool a3_cpp;

      a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                ROrthoGrid* w = getWrapped();
                
                w->paintGridLines(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for paintGridLines";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROrthoGrid
    // Function: paintGridPoints
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              ROrthoGrid_Wrapper::paintGridPoints
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

   && RJSHelper_qcad::is_RBox(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: space (RVector)
  
RVector a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a1);
        
  // convert js parameter to cpp: box (RBox)
  
RBox a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RBox(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                ROrthoGrid* w = getWrapped();
                
                w->paintGridPoints(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for paintGridPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROrthoGrid
    // Function: paintCursor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              ROrthoGrid_Wrapper::paintCursor
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
    
  // convert js parameter to cpp: pos (RVector)
  
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
                ROrthoGrid* w = getWrapped();
                
                w->paintCursor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for paintCursor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROrthoGrid
    // Function: paintRuler
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              ROrthoGrid_Wrapper::paintRuler
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RRuler_ptr(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ruler (RRuler)
  

          // non copyable:
          RRuler*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RRuler_ptr(handler, a1);
        
  // convert js parameter to cpp: devicePixelRatio (qreal)
  
qreal a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 1.0;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
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
                ROrthoGrid* w = getWrapped();
                
                w->paintRuler(
                  *a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for paintRuler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROrthoGrid
    // Function: getInfoText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              ROrthoGrid_Wrapper::getInfoText
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
                ROrthoGrid* w = getWrapped();
                QString res = 
                    
                w->getInfoText(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getInfoText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROrthoGrid
    // Function: getIdealSpacing
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              ROrthoGrid_Wrapper::getIdealSpacing
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

   && RJSHelper_qcad::is_RVector(handler, a2
  )

   && RJSHelper_qcad::is_RVector(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: minPixelSpacing (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: minSpacing (RVector)
  
RVector a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a2);
        
  // convert js parameter to cpp: minMetaSpacing (RVector)
  
RVector a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RVector(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                ROrthoGrid* w = getWrapped();
                QList<RVector> res = 
                    
                w->getIdealSpacing(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QList<RVector>

            return RJSHelper_qcad::cpp2js_QList_RVector(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getIdealSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROrthoGrid
    // Function: isIsometric
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              ROrthoGrid_Wrapper::isIsometric
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
                ROrthoGrid* w = getWrapped();
                bool res = 
                    
                w->isIsometric(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isIsometric";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROrthoGrid
    // Function: setIsometric
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              ROrthoGrid_Wrapper::setIsometric
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
                ROrthoGrid* w = getWrapped();
                
                w->setIsometric(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setIsometric";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROrthoGrid
    // Function: getProjection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              ROrthoGrid_Wrapper::getProjection
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
                ROrthoGrid* w = getWrapped();
                RS::IsoProjectionType res = 
                    
                w->getProjection(
                  
                );
              
            // return type: RS::IsoProjectionType

            return RJSHelper_qcad::cpp2js_RS_IsoProjectionType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getProjection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: ROrthoGrid
    // Function: setProjection
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              ROrthoGrid_Wrapper::setProjection
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_IsoProjectionType(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (RS::IsoProjectionType)
  
RS::IsoProjectionType a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_IsoProjectionType(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                ROrthoGrid* w = getWrapped();
                
                w->setProjection(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProjection";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_rorthogrid_wrapper.cpp"
  
