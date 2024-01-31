

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RFONTCHOOSERWIDGET_H_BASE
  #define RFONTCHOOSERWIDGET_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QLabel>
  
    #include <QQmlEngine>

    
        #include "RFontChooserWidget.h"
      
    // Base class for RFontChooserWidget
      class RFontChooserWidget_Base : public RFontChooserWidget {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RFontChooserWidget
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
RFontChooserWidget_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=0
      )
      
        : RFontChooserWidget(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RFontChooserWidget_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void resizeEvent(
      QResizeEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void resizeEventPublic(
      QResizeEvent* event
    ) {
      //qDebug() << "RFontChooserWidget_Base::resizeEventPublic()";
      RFontChooserWidget::resizeEvent(
        event
      );
    }
  

      // public virtual overwritten functions / events:
      

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
  