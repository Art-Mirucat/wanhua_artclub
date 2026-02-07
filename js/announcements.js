document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 1;
    const itemsPerPage = 5; // 每页显示 X 条 (User said "X", I choose 5)
    let isAscending = false; // 默认倒序 (最新在前)
    let currentAnnouncements = [...announcementsData];

    const listContainer = document.getElementById('announcementsList');
    const paginationContainer = document.getElementById('announcementsPagination');
    const sortBtn = document.getElementById('sortBtn');
    const pageSelectContainer = document.getElementById('pageSelectContainer');
    const latestAnnouncementContainer = document.getElementById('latestAnnouncementContainer'); // 获取“最新公告”的容器
    const latestIndexAnnouncementElement = document.getElementById('latestIndexAnnouncement'); // 获取主页的最新公告元素

    // 检查当前页面是否是 announcements.html
    if (window.location.pathname.includes('announcements.html')) {
        initAnnouncementsPage();
    } else if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        // 如果是主页，则只渲染最新公告
        renderIndexLatestAnnouncement();
    }

    function getLatestAnnouncementHtml() {
        if (announcementsData.length === 0) {
            return '<div style="text-align: center; color: #999; padding: 2rem;">暂无最新置顶公告</div>';
        }

        // 确保数据按日期降序排列，以便获取最新公告
        const sortedAnnouncements = [...announcementsData].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB - dateA;
        });

        const latest = sortedAnnouncements[0];
        return `
            <div class="announcement-card" style="margin-bottom: 0;">
                <div class="announcement-date">${latest.date}</div>
                <div class="announcement-content">${latest.content}</div>
            </div>
        `;
    }

    function initAnnouncementsPage() {
        renderLatestAnnouncement(); // 渲染公告页的最新公告
        render(); // 渲染历届更新列表

        sortBtn.addEventListener('click', () => {
            isAscending = !isAscending;
            sortBtn.textContent = isAscending ? '切换为最新优先' : '切换为旧闻优先'; // 按钮文字提示下一步操作
            render();
        });
    }

    function renderLatestAnnouncement() {
        if (latestAnnouncementContainer) {
            latestAnnouncementContainer.innerHTML = getLatestAnnouncementHtml();
        }
    }

    function renderIndexLatestAnnouncement() {
        if (latestIndexAnnouncementElement) {
            const latestHtml = getLatestAnnouncementHtml();
            // 从 latestHtml 中提取 content 部分，因为主页只需要纯文本
            const parser = new DOMParser();
            const doc = parser.parseFromString(latestHtml, 'text/html');
            const dateDiv = doc.querySelector('.announcement-date');
            const contentDiv = doc.querySelector('.announcement-content');
            if (dateDiv && contentDiv) {
                latestIndexAnnouncementElement.innerHTML = `
                    <div class="announcement-date">${dateDiv.textContent}</div>
                    <div class="announcement-content">${contentDiv.textContent}</div>
                `;
            } else {
                latestIndexAnnouncementElement.textContent = '暂无最新置顶公告';
            }
        }
    }

    function render() {
        // 排序
        currentAnnouncements.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return isAscending ? dateA - dateB : dateB - dateA;
        });

        // 分页计算
        const totalPages = Math.ceil(currentAnnouncements.length / itemsPerPage);
        
        // 确保页码有效
        if (currentPage > totalPages) currentPage = totalPages || 1;
        if (currentPage < 1) currentPage = 1;

        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageItems = currentAnnouncements.slice(start, end);

        // 渲染列表
        listContainer.innerHTML = '';
        if (pageItems.length === 0) {
            listContainer.innerHTML = '<div style="text-align:center; padding:2rem; color:#999;">暂无公告</div>';
        } else {
            pageItems.forEach((item, index) => {
                const card = document.createElement('div');
                card.className = 'announcement-card';
                card.innerHTML = `
                    <div class="announcement-date">${item.date}</div>
                    <div class="announcement-content">${item.content}</div>
                `;
                listContainer.appendChild(card);
                
                // 分割线 (不是最后一个)
                if (index < pageItems.length - 1) {
                    // CSS已处理卡片间距，这里如果不想要卡片式而是列表式，才需要分割线。
                    // 如果已经是卡片式 (margin-bottom)，天然有分隔。
                    // 如果是同一个卡片内的列表，才需要分割线。
                    // 既然是 "Card Style"，每个公告一个Card比较好看。
                }
            });
        }

        // 渲染分页控件
        renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
        paginationContainer.innerHTML = '';
        pageSelectContainer.innerHTML = '';

        if (totalPages <= 1) return;

        // 下拉选择页数 (放在右上角或下方)
        // 需求：下方是当前页数和左右箭头切换页数，表格右上角有两个按钮，左边为切换顺序和倒序，右边为下拉选单以快速选择页数
        
        const select = document.createElement('select');
        select.className = 'page-select';
        for(let i=1; i<=totalPages; i++) {
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = `第 ${i} 页`;
            if (i === currentPage) opt.selected = true;
            select.appendChild(opt);
        }
        select.addEventListener('change', (e) => {
            currentPage = parseInt(e.target.value);
            render();
        });
        pageSelectContainer.appendChild(select);

        // 下方分页条
        const prevBtn = document.createElement('button');
        prevBtn.className = 'btn';
        prevBtn.textContent = '←';
        prevBtn.disabled = currentPage === 1;
        prevBtn.onclick = () => {
            if(currentPage > 1) {
                currentPage--;
                render();
            }
        };

        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn';
        nextBtn.textContent = '→';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.onclick = () => {
            if(currentPage < totalPages) {
                currentPage++;
                render();
            }
        };

        const info = document.createElement('span');
        info.style.margin = '0 15px';
        info.textContent = `${currentPage} / ${totalPages}`;

        paginationContainer.appendChild(prevBtn);
        paginationContainer.appendChild(info);
        paginationContainer.appendChild(nextBtn);
    }
});
