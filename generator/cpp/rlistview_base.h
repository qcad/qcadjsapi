

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RLISTVIEW_H_BASE
  #define RLISTVIEW_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RListView.h"
      
    // Base class for RListView
      class RListView_Base : public RListView {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RListView
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
RListView_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=0
      )
      
        : RListView(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RListView_Base() { }

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
      //qDebug() << "RListView_Base::contextMenuEventPublic()";
      RListView::contextMenuEvent(
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
      //qDebug() << "RListView_Base::mousePressEventPublic()";
      RListView::mousePressEvent(
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
      //qDebug() << "RListView_Base::mouseReleaseEventPublic()";
      RListView::mouseReleaseEvent(
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
      //qDebug() << "RListView_Base::mouseMoveEventPublic()";
      RListView::mouseMoveEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void dragEnterEvent(
      QDragEnterEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void dragEnterEventPublic(
      QDragEnterEvent* e
    ) {
      //qDebug() << "RListView_Base::dragEnterEventPublic()";
      RListView::dragEnterEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void dragMoveEvent(
      QDragMoveEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void dragMoveEventPublic(
      QDragMoveEvent* e
    ) {
      //qDebug() << "RListView_Base::dragMoveEventPublic()";
      RListView::dragMoveEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void dropEvent(
      QDropEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void dropEventPublic(
      QDropEvent* e
    ) {
      //qDebug() << "RListView_Base::dropEventPublic()";
      RListView::dropEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void startDrag(
      Qt::DropActions supportedActions
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void startDragPublic(
      Qt::DropActions supportedActions
    ) {
      //qDebug() << "RListView_Base::startDragPublic()";
      RListView::startDrag(
        supportedActions
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void selectionChanged(
      const QItemSelection& selected, const QItemSelection& deselected
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void selectionChangedPublic(
      const QItemSelection& selected, const QItemSelection& deselected
    ) {
      //qDebug() << "RListView_Base::selectionChangedPublic()";
      RListView::selectionChanged(
        selected, deselected
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void currentChanged(
      const QModelIndex& current, const QModelIndex& previous
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void currentChangedPublic(
      const QModelIndex& current, const QModelIndex& previous
    ) {
      //qDebug() << "RListView_Base::currentChangedPublic()";
      RListView::currentChanged(
        current, previous
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual bool event(
      QEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual bool eventPublic(
      QEvent* event
    ) {
      //qDebug() << "RListView_Base::eventPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RListView::event(
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
  