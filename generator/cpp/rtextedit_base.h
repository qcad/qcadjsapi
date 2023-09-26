

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RTEXTEDIT_H_BASE
  #define RTEXTEDIT_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RTextEdit.h"
      
    // Base class for RTextEdit
      class RTextEdit_Base : public RTextEdit {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RTextEdit
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
RTextEdit_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent
      )
      
        : RTextEdit(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RTextEdit_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void actionEvent(
      QActionEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void actionEventPublic(
      QActionEvent* event
    ) {
      //qDebug() << "RTextEdit_Base::actionEventPublic()";
      RTextEdit::actionEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void setViewportMargins(
      int left, int top, int right, int bottom
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void setViewportMarginsPublic(
      int left, int top, int right, int bottom
    ) {
      //qDebug() << "RTextEdit_Base::setViewportMarginsPublic()";
      RTextEdit::setViewportMargins(
        left, top, right, bottom
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void setViewportMargins(
      const QMargins& margins
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void setViewportMarginsPublic(
      const QMargins& margins
    ) {
      //qDebug() << "RTextEdit_Base::setViewportMarginsPublic()";
      RTextEdit::setViewportMargins(
        margins
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    QMargins viewportMargins(
      
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE QMargins viewportMarginsPublic(
      
    ) {
      //qDebug() << "RTextEdit_Base::viewportMarginsPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RTextEdit::viewportMargins(
        
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    bool eventFilter(
      QObject* a1, QEvent* a2
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE bool eventFilterPublic(
      QObject* a1, QEvent* a2
    ) {
      //qDebug() << "RTextEdit_Base::eventFilterPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RTextEdit::eventFilter(
        a1, a2
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual bool viewportEvent(
      QEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual bool viewportEventPublic(
      QEvent* a1
    ) {
      //qDebug() << "RTextEdit_Base::viewportEventPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RTextEdit::viewportEvent(
        a1
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual QSize viewportSizeHint(
      
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual QSize viewportSizeHintPublic(
      
    ) {
      //qDebug() << "RTextEdit_Base::viewportSizeHintPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RTextEdit::viewportSizeHint(
        
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void resizeEvent(
      QResizeEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void resizeEventPublic(
      QResizeEvent* e
    ) {
      //qDebug() << "RTextEdit_Base::resizeEventPublic()";
      RTextEdit::resizeEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void mouseMoveEvent(
      QMouseEvent* ev
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void mouseMoveEventPublic(
      QMouseEvent* ev
    ) {
      //qDebug() << "RTextEdit_Base::mouseMoveEventPublic()";
      RTextEdit::mouseMoveEvent(
        ev
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void paintEvent(
      QPaintEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void paintEventPublic(
      QPaintEvent* e
    ) {
      //qDebug() << "RTextEdit_Base::paintEventPublic()";
      RTextEdit::paintEvent(
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
  