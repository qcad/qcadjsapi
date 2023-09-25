

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RPROPERTYEDITOR_H_BASE
  #define RPROPERTYEDITOR_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RPropertyEditor.h"
      
    // Base class for RPropertyEditor
      class RPropertyEditor_Base : public RPropertyEditor {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RPropertyEditor
  // Function: 
  // Parameters: 0
  // preceding Parameters: -1
RPropertyEditor_Base
        
      (

        
          RJSApi& _h
          
      )
      
        : RPropertyEditor(
          
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RPropertyEditor_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void updateEditor(
      RObject& object, const QList<RPropertyTypeId>& propertyTypeIds, bool doUpdateGui, RDocument* document=NULL, bool showOnRequest=false
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void updateEditorPublic(
      RObject& object, const QList<RPropertyTypeId>& propertyTypeIds, bool doUpdateGui, RDocument* document=NULL, bool showOnRequest=false
    ) {
      //qDebug() << "RPropertyEditor_Base::updateEditorPublic()";
      RPropertyEditor::updateEditor(
        object, propertyTypeIds, doUpdateGui, document, showOnRequest
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void updateGui(
      bool onlyChanges=false
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void updateGuiPublic(
      bool onlyChanges=false
    ) {
      //qDebug() << "RPropertyEditor_Base::updateGuiPublic()";
      RPropertyEditor::updateGui(
        onlyChanges
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void updateProperty(
      const RPropertyTypeId& propertyTypeId, RObject& object, RDocument* document, bool showOnRequest=false
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void updatePropertyPublic(
      const RPropertyTypeId& propertyTypeId, RObject& object, RDocument* document, bool showOnRequest=false
    ) {
      //qDebug() << "RPropertyEditor_Base::updatePropertyPublic()";
      RPropertyEditor::updateProperty(
        propertyTypeId, object, document, showOnRequest
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual bool showCustomAppProperties(
      RPropertyAttributes::Option opt
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual bool showCustomAppPropertiesPublic(
      RPropertyAttributes::Option opt
    ) {
      //qDebug() << "RPropertyEditor_Base::showCustomAppPropertiesPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RPropertyEditor::showCustomAppProperties(
        opt
      );
    }
  

      // public virtual overwritten functions / events:
      
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void updateFromDocument(
      RDocument* document, bool onlyChanges, RS::EntityType filter=RS::EntityUnknown, bool manual=false, bool showOnRequest=false
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void updateFromDocumentSup(
        RDocument* document, bool onlyChanges, RS::EntityType filter=RS::EntityUnknown, bool manual=false, bool showOnRequest=false
      )
      
      {
        RPropertyEditor::updateFromDocument(
          document, onlyChanges, filter, manual, showOnRequest
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void updateFromObject(
      RObject* object, RDocument* document=NULL
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void updateFromObjectSup(
        RObject* object, RDocument* document=NULL
      )
      
      {
        RPropertyEditor::updateFromObject(
          object, document
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void clearEditor(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void clearEditorSup(
        
      )
      
      {
        RPropertyEditor::clearEditor(
          
        );
      }
    

      // public pure-virtual functions:
      

    public:
      //void setRecFlag(bool on) {
      //  recFlag = on;
      //}

    public:
      QJSValue self;

    private:
      
        RJSApi& handler;
      
      //bool recFlag;

    };
    
  #endif
  