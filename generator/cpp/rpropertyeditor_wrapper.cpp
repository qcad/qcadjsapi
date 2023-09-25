
  // Auto generated
  
  // include header:
  //#include "RPropertyEditorwrapper.h"
  //#include "header_cpp.h"
  
    #include "rpropertyeditor_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: RPropertyEditor
    // Function: getInstance
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_WrapperSingleton::getInstance
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            RPropertyEditor* res = 
                
                // call static member function:
                RPropertyEditor::getInstance(
              
            );
          
            // return type: RPropertyEditor*

            return RJSHelper_qcad::cpp2js_RPropertyEditor(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getInstance";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: checkType
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_WrapperSingleton::checkType
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_EntityType(handler, a1
  )

   && RJSHelper_qcad::is_RS_EntityType(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (RS::EntityType)
  
RS::EntityType a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_EntityType(handler, a1);
        
  // convert js parameter to cpp: filter (RS::EntityType)
  
RS::EntityType a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RS_EntityType(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                RPropertyEditor::checkType(
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

                  qWarning() << "no matching function variant found for checkType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: makeReadOnly
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_WrapperSingleton::makeReadOnly
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: control (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        
  // convert js parameter to cpp: on (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                RPropertyEditor::makeReadOnly(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for makeReadOnly";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void RPropertyEditor_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<RPropertyEditor_Wrapper>("org.qcad", 1, 0, "RPropertyEditor_Wrapper");
        qmlRegisterInterface<RPropertyEditor_Wrapper>("RPropertyEditor_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_RPropertyEditor* t = new RJSType_RPropertyEditor();
          global.setProperty("RJSType_RPropertyEditor", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_RPropertyEditor::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&RPropertyEditor_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("RPropertyEditor_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&RPropertyEditor_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("RPropertyEditor_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&RPropertyEditor_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("RPropertyEditor_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        RPropertyEditor_WrapperSingleton * s = new RPropertyEditor_WrapperSingleton(handler);
        engine->globalObject().setProperty("RPropertyEditor_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/RPropertyEditor.js";
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
    RPropertyEditor_Wrapper::RPropertyEditor_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("RPropertyEditor_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      RPropertyEditor_Wrapper::RPropertyEditor_Wrapper(RJSApi& h, RPropertyEditor* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("RPropertyEditor_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("RPropertyEditor_Wrapper"));
              //setObjectName("RPropertyEditor_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      RPropertyEditor_Wrapper::~RPropertyEditor_Wrapper() {
            //RDebug::decCounter(QString("RPropertyEditor_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("RPropertyEditor_Wrapper"));

            //qDebug() << "RPropertyEditor_Wrapper::~RPropertyEditor_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of RPropertyEditor";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void RPropertyEditor_Wrapper::initConnections() {

          //setObjectName("RPropertyEditor_Wrapper");

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
  
    // Class: RPropertyEditor
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
RPropertyEditor_Wrapper::RPropertyEditor_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("RPropertyEditor_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("RPropertyEditor_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new RPropertyEditor_Base(
              handler
              
            );
            wrappedCreated = true;

            // set handler for wrapped base object:
            //((RPropertyEditor_Base*)wrapped)->setHandler(handler);

            // store self to call into JS:
            ((RPropertyEditor_Base*)wrapped)->self = handler.getSelf();
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for RPropertyEditor";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: RPropertyEditor
    // Function: updateFromDocument
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      updateFromDocumentSuper
                    
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
        RJSHelper_qcad::is_RDocument_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
  )

   && RJSHelper_qcad::is_RS_EntityType(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

   && RJSHelper::is_bool(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: document (RDocument)
  

          // pointer:
          RDocument*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a1);
        
  // convert js parameter to cpp: onlyChanges (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        
  // convert js parameter to cpp: filter (RS::EntityType)
  
RS::EntityType a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RS::EntityUnknown;
          }
          else {
            a3_cpp = RJSHelper_qcad::js2cpp_RS_EntityType(handler, a3);
          }
        
  // convert js parameter to cpp: manual (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        
  // convert js parameter to cpp: showOnRequest (bool)
  
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RPropertyEditor_Base class as 
                // function has postfix inheritable class, overridable function):
                RPropertyEditor_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RPropertyEditor::updateFromDocument: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->updateFromDocumentSup(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->updateFromDocument(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateFromDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: updateFromObject
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      updateFromObjectSuper
                    
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
    , true
  
  )

   && RJSHelper_qcad::is_RDocument_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: object (RObject)
  

          // pointer:
          RObject*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_ptr(handler, a1);
        
  // convert js parameter to cpp: document (RDocument)
  

          // pointer:
          RDocument*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = NULL;
          }
          else {
            a2_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a2);
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
            
                // call function of RPropertyEditor_Base class as 
                // function has postfix inheritable class, overridable function):
                RPropertyEditor_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RPropertyEditor::updateFromObject: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->updateFromObjectSup(
                        a1_cpp
    , a2_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->updateFromObject(
                        a1_cpp
    , a2_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateFromObject";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: clearEditor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      clearEditorSuper
                    
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
            
                // call function of RPropertyEditor_Base class as 
                // function has postfix inheritable class, overridable function):
                RPropertyEditor_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RPropertyEditor::clearEditor: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->clearEditorSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->clearEditor(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearEditor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: getFixedCustomPropertyNames
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper::getFixedCustomPropertyNames
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_QList_RS_EntityType(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: objectTypes (QList<RS::EntityType>)
  
QList<RS::EntityType> a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_QList_RS_EntityType(handler, a1);
        

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
                RPropertyEditor* w = getWrapped();
                QStringList res = 
                    
                w->getFixedCustomPropertyNames(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getFixedCustomPropertyNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: updateLayers
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper::updateLayers
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

   && RJSHelper_qcad::is_QList_RLayer_Id(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        
  // convert js parameter to cpp: layerIds (QList<RLayer::Id>)
  
QList<RLayer::Id> a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_QList_RLayer_Id(handler, a2);
        

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
                RPropertyEditor* w = getWrapped();
                
                w->updateLayers(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

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
            
                // call function of C++ class:
                RPropertyEditor* w = getWrapped();
                
                w->updateLayers(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateLayers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: setCurrentLayer
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper::setCurrentLayer
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RDocumentInterface_ptr(handler, a1
    , true
  
  )

   && RJSHelper_qcad::is_RLayer_Id(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: documentInterface (RDocumentInterface)
  

          // pointer:
          RDocumentInterface*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RDocumentInterface_ptr(handler, a1);
        
  // convert js parameter to cpp: previousLayerId (RLayer::Id)
  
RLayer::Id a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RLayer_Id(handler, a2);
        

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
                RPropertyEditor* w = getWrapped();
                
                w->setCurrentLayer(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentLayer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: clearLayers
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper::clearLayers
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
                RPropertyEditor* w = getWrapped();
                
                w->clearLayers(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearLayers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: propertyChanged
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper::propertyChanged
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
        RJSHelper_qcad::is_RPropertyTypeId(handler, a1
  )

   && RJSHelper::is_QVariant(handler, a2
  )

   && RJSHelper_qcad::is_RS_MetaType(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyTypeId (RPropertyTypeId)
  
RPropertyTypeId a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPropertyTypeId(handler, a1);
        
  // convert js parameter to cpp: propertyValue (QVariant)
  
QVariant a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
        
  // convert js parameter to cpp: typeHint (RS::MetaType)
  
RS::MetaType a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = RS::UnknownType;
          }
          else {
            a3_cpp = RJSHelper_qcad::js2cpp_RS_MetaType(handler, a3);
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
                RPropertyEditor* w = getWrapped();
                
                w->propertyChanged(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for propertyChanged";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: listPropertyChanged
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper::listPropertyChanged
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
        RJSHelper_qcad::is_RPropertyTypeId(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QVariant(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyTypeId (RPropertyTypeId)
  
RPropertyTypeId a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPropertyTypeId(handler, a1);
        
  // convert js parameter to cpp: index (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: propertyValue (QVariant)
  
QVariant a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QVariant(handler, a3);
        

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
                RPropertyEditor* w = getWrapped();
                
                w->listPropertyChanged(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for listPropertyChanged";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: getGroupTitles
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper::getGroupTitles
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
                RPropertyEditor* w = getWrapped();
                QStringList res = 
                    
                w->getGroupTitles(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getGroupTitles";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: getPropertyTitles
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper::getPropertyTitles
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
    
  // convert js parameter to cpp: group (QString)
  
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
                RPropertyEditor* w = getWrapped();
                QStringList res = 
                    
                w->getPropertyTitles(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPropertyTitles";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: getPropertyValue
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper::getPropertyValue
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

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: group (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: title (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

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
                RPropertyEditor* w = getWrapped();
                QVariant res = 
                    
                w->getPropertyValue(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RPropertyTypeId(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyTypeId (RPropertyTypeId)
  
RPropertyTypeId a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPropertyTypeId(handler, a1);
        

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
                RPropertyEditor* w = getWrapped();
                QVariant res = 
                    
                w->getPropertyValue(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPropertyValue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: getPropertyAttributes
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper::getPropertyAttributes
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

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: group (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: title (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

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
                RPropertyEditor* w = getWrapped();
                RPropertyAttributes res = 
                    
                w->getPropertyAttributes(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: RPropertyAttributes

            return RJSHelper_qcad::cpp2js_RPropertyAttributes(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper_qcad::is_RPropertyTypeId(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyTypeId (RPropertyTypeId)
  
RPropertyTypeId a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPropertyTypeId(handler, a1);
        

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
                RPropertyEditor* w = getWrapped();
                RPropertyAttributes res = 
                    
                w->getPropertyAttributes(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: RPropertyAttributes

            return RJSHelper_qcad::cpp2js_RPropertyAttributes(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getPropertyAttributes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: getCustomPropertyAttributes
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper::getCustomPropertyAttributes
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

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: group (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: title (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

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
                RPropertyEditor* w = getWrapped();
                RPropertyAttributes res = 
                    
                w->getCustomPropertyAttributes(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: RPropertyAttributes

            return RJSHelper_qcad::cpp2js_RPropertyAttributes(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getCustomPropertyAttributes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: getTypes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper::getTypes
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
                RPropertyEditor* w = getWrapped();
                QList<RS::EntityType> res = 
                    
                w->getTypes(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QList<RS::EntityType>

            return RJSHelper_qcad::cpp2js_QList_RS_EntityType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: getTypeCount
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper::getTypeCount
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_EntityType(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (RS::EntityType)
  
RS::EntityType a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_EntityType(handler, a1);
        

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
                RPropertyEditor* w = getWrapped();
                int res = 
                    
                w->getTypeCount(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getTypeCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: setEntityTypeFilter
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper::setEntityTypeFilter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RS_EntityType(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (RS::EntityType)
  
RS::EntityType a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RS_EntityType(handler, a1);
        

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
                RPropertyEditor* w = getWrapped();
                
                w->setEntityTypeFilter(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEntityTypeFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: getEntityTypeFilter
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper::getEntityTypeFilter
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                RPropertyEditor* w = getWrapped();
                RS::EntityType res = 
                    
                w->getEntityTypeFilter(
                  
                );
              
                //setRecFlag(false);
              
            // return type: RS::EntityType

            return RJSHelper_qcad::cpp2js_RS_EntityType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getEntityTypeFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: getAppProperties
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper::getAppProperties
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
                RPropertyEditor* w = getWrapped();
                QStringList res = 
                    
                w->getAppProperties(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for getAppProperties";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: updateEditor
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      updateEditorSuper
                    
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
        RJSHelper_qcad::is_RObject_ptr(handler, a1
  )

   && RJSHelper_qcad::is_QList_RPropertyTypeId(handler, a2
  )

   && RJSHelper::is_bool(handler, a3
  )

   && RJSHelper_qcad::is_RDocument_ptr(handler, a4
    , true
  
  )

   && RJSHelper::is_bool(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: object (RObject)
  

          // non copyable:
          RObject*
         a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RObject_ptr(handler, a1);
        
  // convert js parameter to cpp: propertyTypeIds (QList<RPropertyTypeId>)
  
QList<RPropertyTypeId> a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_QList_RPropertyTypeId(handler, a2);
        
  // convert js parameter to cpp: doUpdateGui (bool)
  
bool a3_cpp;

      a3_cpp = RJSHelper::js2cpp_bool(handler, a3);
        
  // convert js parameter to cpp: document (RDocument)
  

          // pointer:
          RDocument*
         a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = NULL;
          }
          else {
            a4_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a4);
          }
        
  // convert js parameter to cpp: showOnRequest (bool)
  
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RPropertyEditor_Base class as 
                // function has postfix inheritable class, overridable function):
                RPropertyEditor_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RPropertyEditor::updateEditor: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->updateEditorPublic(
                      *a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateEditor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: updateGui
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      updateGuiSuper
                    
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
    
  // convert js parameter to cpp: onlyChanges (bool)
  
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RPropertyEditor_Base class as 
                // function has postfix inheritable class, overridable function):
                RPropertyEditor_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RPropertyEditor::updateGui: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->updateGuiPublic(
                      a1_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateGui";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: updateProperty
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      updatePropertySuper
                    
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
        RJSHelper_qcad::is_RPropertyTypeId(handler, a1
  )

   && RJSHelper_qcad::is_RObject_ptr(handler, a2
  )

   && RJSHelper_qcad::is_RDocument_ptr(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyTypeId (RPropertyTypeId)
  
RPropertyTypeId a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPropertyTypeId(handler, a1);
        
  // convert js parameter to cpp: object (RObject)
  

          // non copyable:
          RObject*
         a2_cpp;

      a2_cpp = RJSHelper_qcad::js2cpp_RObject_ptr(handler, a2);
        
  // convert js parameter to cpp: document (RDocument)
  

          // pointer:
          RDocument*
         a3_cpp;

      a3_cpp = RJSHelper_qcad::js2cpp_RDocument_ptr(handler, a3);
        
  // convert js parameter to cpp: showOnRequest (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
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
            
                // call function of RPropertyEditor_Base class as 
                // function has postfix inheritable class, overridable function):
                RPropertyEditor_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RPropertyEditor::updateProperty: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    wb->updatePropertyPublic(
                      a1_cpp
    , *a2_cpp
    , a3_cpp
    , a4_cpp
    
                    );
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for updateProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: RPropertyEditor
    // Function: showCustomAppProperties
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              RPropertyEditor_Wrapper:: 
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      showCustomAppPropertiesSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper_qcad::is_RPropertyAttributes_Option(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: opt (RPropertyAttributes::Option)
  
RPropertyAttributes::Option a1_cpp;

      a1_cpp = RJSHelper_qcad::js2cpp_RPropertyAttributes_Option(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of RPropertyEditor_Base class as 
                // function has postfix inheritable class, overridable function):
                RPropertyEditor_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "RPropertyEditor::showCustomAppProperties: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    res =
                    wb->showCustomAppPropertiesPublic(
                      a1_cpp
    
                    );
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for showCustomAppProperties";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  