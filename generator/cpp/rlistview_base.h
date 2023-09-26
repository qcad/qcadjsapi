

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
    virtual void actionEvent(
      QActionEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void actionEventPublic(
      QActionEvent* event
    ) {
      //qDebug() << "RListView_Base::actionEventPublic()";
      RListView::actionEvent(
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
      //qDebug() << "RListView_Base::setViewportMarginsPublic()";
      RListView::setViewportMargins(
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
      //qDebug() << "RListView_Base::setViewportMarginsPublic()";
      RListView::setViewportMargins(
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
      //qDebug() << "RListView_Base::viewportMarginsPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RListView::viewportMargins(
        
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
      //qDebug() << "RListView_Base::eventFilterPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RListView::eventFilter(
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
      //qDebug() << "RListView_Base::viewportEventPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RListView::viewportEvent(
        a1
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void mouseDoubleClickEvent(
      QMouseEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void mouseDoubleClickEventPublic(
      QMouseEvent* a1
    ) {
      //qDebug() << "RListView_Base::mouseDoubleClickEventPublic()";
      RListView::mouseDoubleClickEvent(
        a1
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void keyPressEvent(
      QKeyEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void keyPressEventPublic(
      QKeyEvent* a1
    ) {
      //qDebug() << "RListView_Base::keyPressEventPublic()";
      RListView::keyPressEvent(
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
      //qDebug() << "RListView_Base::pressedPublic()";
      RListView::pressed(
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
      //qDebug() << "RListView_Base::clickedPublic()";
      RListView::clicked(
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
      //qDebug() << "RListView_Base::activatedPublic()";
      RListView::activated(
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
      //qDebug() << "RListView_Base::enteredPublic()";
      RListView::entered(
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
      //qDebug() << "RListView_Base::viewportEnteredPublic()";
      RListView::viewportEntered(
        
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
      //qDebug() << "RListView_Base::iconSizeChangedPublic()";
      RListView::iconSizeChanged(
        size
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void scrollContentsBy(
      int dx, int dy
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void scrollContentsByPublic(
      int dx, int dy
    ) {
      //qDebug() << "RListView_Base::scrollContentsByPublic()";
      RListView::scrollContentsBy(
        dx, dy
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void resizeContents(
      int width, int height
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void resizeContentsPublic(
      int width, int height
    ) {
      //qDebug() << "RListView_Base::resizeContentsPublic()";
      RListView::resizeContents(
        width, height
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    QSize contentsSize(
      
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE QSize contentsSizePublic(
      
    ) {
      //qDebug() << "RListView_Base::contentsSizePublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RListView::contentsSize(
        
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void dataChanged(
      const QModelIndex& topLeft, const QModelIndex& bottomRight, const QList<int>& roles=QList<int>()
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void dataChangedPublic(
      const QModelIndex& topLeft, const QModelIndex& bottomRight, const QList<int>& roles=QList<int>()
    ) {
      //qDebug() << "RListView_Base::dataChangedPublic()";
      RListView::dataChanged(
        topLeft, bottomRight, roles
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void rowsInserted(
      const QModelIndex& parent, int start, int end
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void rowsInsertedPublic(
      const QModelIndex& parent, int start, int end
    ) {
      //qDebug() << "RListView_Base::rowsInsertedPublic()";
      RListView::rowsInserted(
        parent, start, end
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void rowsAboutToBeRemoved(
      const QModelIndex& parent, int start, int end
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void rowsAboutToBeRemovedPublic(
      const QModelIndex& parent, int start, int end
    ) {
      //qDebug() << "RListView_Base::rowsAboutToBeRemovedPublic()";
      RListView::rowsAboutToBeRemoved(
        parent, start, end
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void wheelEvent(
      QWheelEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void wheelEventPublic(
      QWheelEvent* e
    ) {
      //qDebug() << "RListView_Base::wheelEventPublic()";
      RListView::wheelEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void resizeEvent(
      QResizeEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void resizeEventPublic(
      QResizeEvent* e
    ) {
      //qDebug() << "RListView_Base::resizeEventPublic()";
      RListView::resizeEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void paintEvent(
      QPaintEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void paintEventPublic(
      QPaintEvent* e
    ) {
      //qDebug() << "RListView_Base::paintEventPublic()";
      RListView::paintEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    int horizontalOffset(
      
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE int horizontalOffsetPublic(
      
    ) {
      //qDebug() << "RListView_Base::horizontalOffsetPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RListView::horizontalOffset(
        
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    int verticalOffset(
      
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE int verticalOffsetPublic(
      
    ) {
      //qDebug() << "RListView_Base::verticalOffsetPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RListView::verticalOffset(
        
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    QRect rectForIndex(
      const QModelIndex& index
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE QRect rectForIndexPublic(
      const QModelIndex& index
    ) {
      //qDebug() << "RListView_Base::rectForIndexPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RListView::rectForIndex(
        index
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void setPositionForIndex(
      const QPoint& position, const QModelIndex& index
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void setPositionForIndexPublic(
      const QPoint& position, const QModelIndex& index
    ) {
      //qDebug() << "RListView_Base::setPositionForIndexPublic()";
      RListView::setPositionForIndex(
        position, index
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void updateGeometries(
      
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void updateGeometriesPublic(
      
    ) {
      //qDebug() << "RListView_Base::updateGeometriesPublic()";
      RListView::updateGeometries(
        
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    bool isIndexHidden(
      const QModelIndex& index
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE bool isIndexHiddenPublic(
      const QModelIndex& index
    ) {
      //qDebug() << "RListView_Base::isIndexHiddenPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RListView::isIndexHidden(
        index
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    QSize viewportSizeHint(
      
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE QSize viewportSizeHintPublic(
      
    ) {
      //qDebug() << "RListView_Base::viewportSizeHintPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RListView::viewportSizeHint(
        
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
  