

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
    virtual void actionEvent(
      QActionEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void actionEventPublic(
      QActionEvent* event
    ) {
      //qDebug() << "RListWidget_Base::actionEventPublic()";
      RListWidget::actionEvent(
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
      //qDebug() << "RListWidget_Base::setViewportMarginsPublic()";
      RListWidget::setViewportMargins(
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
      //qDebug() << "RListWidget_Base::setViewportMarginsPublic()";
      RListWidget::setViewportMargins(
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
      //qDebug() << "RListWidget_Base::viewportMarginsPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RListWidget::viewportMargins(
        
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
      //qDebug() << "RListWidget_Base::eventFilterPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RListWidget::eventFilter(
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
      //qDebug() << "RListWidget_Base::viewportEventPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RListWidget::viewportEvent(
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
      //qDebug() << "RListWidget_Base::mouseDoubleClickEventPublic()";
      RListWidget::mouseDoubleClickEvent(
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
      //qDebug() << "RListWidget_Base::dragEnterEventPublic()";
      RListWidget::dragEnterEvent(
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
      //qDebug() << "RListWidget_Base::keyPressEventPublic()";
      RListWidget::keyPressEvent(
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
      //qDebug() << "RListWidget_Base::pressedPublic()";
      RListWidget::pressed(
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
      //qDebug() << "RListWidget_Base::clickedPublic()";
      RListWidget::clicked(
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
      //qDebug() << "RListWidget_Base::activatedPublic()";
      RListWidget::activated(
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
      //qDebug() << "RListWidget_Base::enteredPublic()";
      RListWidget::entered(
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
      //qDebug() << "RListWidget_Base::viewportEnteredPublic()";
      RListWidget::viewportEntered(
        
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
      //qDebug() << "RListWidget_Base::iconSizeChangedPublic()";
      RListWidget::iconSizeChanged(
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
      //qDebug() << "RListWidget_Base::scrollContentsByPublic()";
      RListWidget::scrollContentsBy(
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
      //qDebug() << "RListWidget_Base::resizeContentsPublic()";
      RListWidget::resizeContents(
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
      //qDebug() << "RListWidget_Base::contentsSizePublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RListWidget::contentsSize(
        
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
      //qDebug() << "RListWidget_Base::dataChangedPublic()";
      RListWidget::dataChanged(
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
      //qDebug() << "RListWidget_Base::rowsInsertedPublic()";
      RListWidget::rowsInserted(
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
      //qDebug() << "RListWidget_Base::rowsAboutToBeRemovedPublic()";
      RListWidget::rowsAboutToBeRemoved(
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
      //qDebug() << "RListWidget_Base::wheelEventPublic()";
      RListWidget::wheelEvent(
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
      //qDebug() << "RListWidget_Base::resizeEventPublic()";
      RListWidget::resizeEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void startDrag(
      Qt::DropActions supportedActions
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void startDragPublic(
      Qt::DropActions supportedActions
    ) {
      //qDebug() << "RListWidget_Base::startDragPublic()";
      RListWidget::startDrag(
        supportedActions
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
      //qDebug() << "RListWidget_Base::paintEventPublic()";
      RListWidget::paintEvent(
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
      //qDebug() << "RListWidget_Base::horizontalOffsetPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RListWidget::horizontalOffset(
        
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
      //qDebug() << "RListWidget_Base::verticalOffsetPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RListWidget::verticalOffset(
        
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
      //qDebug() << "RListWidget_Base::rectForIndexPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RListWidget::rectForIndex(
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
      //qDebug() << "RListWidget_Base::setPositionForIndexPublic()";
      RListWidget::setPositionForIndex(
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
      //qDebug() << "RListWidget_Base::updateGeometriesPublic()";
      RListWidget::updateGeometries(
        
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
      //qDebug() << "RListWidget_Base::isIndexHiddenPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RListWidget::isIndexHidden(
        index
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void currentChanged(
      const QModelIndex& current, const QModelIndex& previous
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void currentChangedPublic(
      const QModelIndex& current, const QModelIndex& previous
    ) {
      //qDebug() << "RListWidget_Base::currentChangedPublic()";
      RListWidget::currentChanged(
        current, previous
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
      //qDebug() << "RListWidget_Base::viewportSizeHintPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      RListWidget::viewportSizeHint(
        
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
  