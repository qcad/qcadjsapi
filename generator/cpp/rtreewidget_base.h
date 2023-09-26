

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RTREEWIDGET_H_BASE
  #define RTREEWIDGET_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RTreeWidget.h"
      
    // Base class for RTreeWidget
      class RTreeWidget_Base : public RTreeWidget {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RTreeWidget
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
RTreeWidget_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=0
      )
      
        : RTreeWidget(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RTreeWidget_Base() { }

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
      //qDebug() << "RTreeWidget_Base::actionEventPublic()";
      RTreeWidget::actionEvent(
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
      //qDebug() << "RTreeWidget_Base::setViewportMarginsPublic()";
      RTreeWidget::setViewportMargins(
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
      //qDebug() << "RTreeWidget_Base::setViewportMarginsPublic()";
      RTreeWidget::setViewportMargins(
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
      //qDebug() << "RTreeWidget_Base::viewportMarginsPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RTreeWidget::viewportMargins(
        
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
      //qDebug() << "RTreeWidget_Base::eventFilterPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RTreeWidget::eventFilter(
        a1, a2
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void wheelEvent(
      QWheelEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void wheelEventPublic(
      QWheelEvent* a1
    ) {
      //qDebug() << "RTreeWidget_Base::wheelEventPublic()";
      RTreeWidget::wheelEvent(
        a1
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void dragEnterEvent(
      QDragEnterEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void dragEnterEventPublic(
      QDragEnterEvent* a1
    ) {
      //qDebug() << "RTreeWidget_Base::dragEnterEventPublic()";
      RTreeWidget::dragEnterEvent(
        a1
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void pressed(
      const QModelIndex& index
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void pressedPublic(
      const QModelIndex& index
    ) {
      //qDebug() << "RTreeWidget_Base::pressedPublic()";
      RTreeWidget::pressed(
        index
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void clicked(
      const QModelIndex& index
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void clickedPublic(
      const QModelIndex& index
    ) {
      //qDebug() << "RTreeWidget_Base::clickedPublic()";
      RTreeWidget::clicked(
        index
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void activated(
      const QModelIndex& index
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void activatedPublic(
      const QModelIndex& index
    ) {
      //qDebug() << "RTreeWidget_Base::activatedPublic()";
      RTreeWidget::activated(
        index
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void entered(
      const QModelIndex& index
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void enteredPublic(
      const QModelIndex& index
    ) {
      //qDebug() << "RTreeWidget_Base::enteredPublic()";
      RTreeWidget::entered(
        index
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void viewportEntered(
      
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void viewportEnteredPublic(
      
    ) {
      //qDebug() << "RTreeWidget_Base::viewportEnteredPublic()";
      RTreeWidget::viewportEntered(
        
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void iconSizeChanged(
      const QSize& size
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void iconSizeChangedPublic(
      const QSize& size
    ) {
      //qDebug() << "RTreeWidget_Base::iconSizeChangedPublic()";
      RTreeWidget::iconSizeChanged(
        size
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void paintEvent(
      QPaintEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void paintEventPublic(
      QPaintEvent* event
    ) {
      //qDebug() << "RTreeWidget_Base::paintEventPublic()";
      RTreeWidget::paintEvent(
        event
      );
    }
  
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
      //qDebug() << "RTreeWidget_Base::contextMenuEventPublic()";
      RTreeWidget::contextMenuEvent(
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
      //qDebug() << "RTreeWidget_Base::mousePressEventPublic()";
      RTreeWidget::mousePressEvent(
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
      //qDebug() << "RTreeWidget_Base::mouseReleaseEventPublic()";
      RTreeWidget::mouseReleaseEvent(
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
      //qDebug() << "RTreeWidget_Base::mouseMoveEventPublic()";
      RTreeWidget::mouseMoveEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void resizeEvent(
      QResizeEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void resizeEventPublic(
      QResizeEvent* event
    ) {
      //qDebug() << "RTreeWidget_Base::resizeEventPublic()";
      RTreeWidget::resizeEvent(
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
  