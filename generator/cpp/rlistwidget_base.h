

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RLISTWIDGET_H_BASE
  #define RLISTWIDGET_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RListWidget.h"
      
    // Base class for RListWidget
      class RListWidget_Base : public RListWidget {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RListWidget
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
RListWidget_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=0
      )
      
        : RListWidget(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RListWidget_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void contextMenuEvent(
      QContextMenuEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void contextMenuEventPublic(
      QContextMenuEvent* e
    ) {
      //qDebug() << "RListWidget_Base::contextMenuEventPublic()";
      RListWidget::contextMenuEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void mousePressEvent(
      QMouseEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void mousePressEventPublic(
      QMouseEvent* e
    ) {
      //qDebug() << "RListWidget_Base::mousePressEventPublic()";
      RListWidget::mousePressEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void mouseReleaseEvent(
      QMouseEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void mouseReleaseEventPublic(
      QMouseEvent* e
    ) {
      //qDebug() << "RListWidget_Base::mouseReleaseEventPublic()";
      RListWidget::mouseReleaseEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void mouseMoveEvent(
      QMouseEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void mouseMoveEventPublic(
      QMouseEvent* e
    ) {
      //qDebug() << "RListWidget_Base::mouseMoveEventPublic()";
      RListWidget::mouseMoveEvent(
        e
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
  