document.addEventListener('DOMContentLoaded', () => {
    // 状态变量
    let currentMembers = [...membersData]; // 当前筛选后的社员列表
    let currentPage = 1; // 当前页码
    const itemsPerPage = 4; // 每页显示4个社员
    let selectedTags = new Set(); // 存储当前选中的标签（主标签+子标签）
    let activeMainTag = null; // 当前展开的主标签

    // DOM 元素
    const searchInput = document.getElementById('searchInput');
    const filterTagsArea = document.getElementById('filterTagsArea');
    const selectedTagsDisplay = document.getElementById('selectedTagsDisplay');
    const membersGrid = document.getElementById('membersGrid');
    const paginationContainer = document.getElementById('pagination');
    const modal = document.getElementById('memberModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const mediaPreviewModal = document.getElementById('mediaPreviewModal');
    const mediaPreviewCloseBtn = mediaPreviewModal.querySelector('.media-preview-close');
    const mediaContainer = mediaPreviewModal.querySelector('.media-container');

    // 初始化
    init();

    function init() {
        // 排序初始数据 (拼音顺序)
        sortMembers(membersData);
        currentMembers = [...membersData];

        // 渲染筛选区
        renderFilterSystem();

        // 渲染初始列表
        renderMembers();

        // 搜索框事件
        searchInput.addEventListener('focus', () => {
            filterTagsArea.style.display = 'block';
        });
        
        // 点击外部关闭筛选区逻辑可根据需求添加，这里暂保留展开以便操作

        // 搜索功能
        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase();
            filterMembers(keyword);
        });

        // 模态框关闭
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // 媒体预览模态框关闭
        mediaPreviewCloseBtn.addEventListener('click', () => {
            mediaPreviewModal.style.display = 'none';
            mediaContainer.innerHTML = ''; // 清空内容
        });

        window.addEventListener('click', (e) => {
            // 只有当点击目标是 mediaPreviewModal 自身，而不是其内部元素时才关闭
            if (e.target === mediaPreviewModal) {
                mediaPreviewModal.style.display = 'none';
                mediaContainer.innerHTML = ''; // 清空内容
            }
        });
    }

    function sortMembers(list) {
        const getCharType = (char) => {
            if (!char) return 5; // 空字符或undefined排最后
            const code = char.charCodeAt(0);
            // 标点符号和特殊字符 (ASCII 32-47, 58-64, 91-96, 123-126, 以及一些常见的中文标点)
            if ((code >= 32 && code <= 47) || (code >= 58 && code <= 64) || (code >= 91 && code <= 96) || (code >= 123 && code <= 126) ||
                (code >= 0x3000 && code <= 0x303F) || (code >= 0xFF00 && code <= 0xFFEF)) { // CJK标点
                return 1;
            }
            // 数字
            if (code >= 48 && code <= 57) {
                return 2;
            }
            // 英文
            if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
                return 3;
            }
            // 中文 (通过拼音判断，这里假设pinyin字段已经处理好)
            // 实际上，如果第一个字符是中文，其pinyin会是对应的拼音
            // 直接根据pinyin来比较，如果前面类型都不匹配，就认为是中文或其它
            return 4;
        };

        list.sort((a, b) => {
            const charA = a.name ? a.name.charAt(0) : '';
            const charB = b.name ? b.name.charAt(0) : '';

            const typeA = getCharType(charA);
            const typeB = getCharType(charB);

            if (typeA !== typeB) {
                return typeA - typeB;
            } else {
                // 如果类型相同，则按原始拼音顺序排序
                return a.pinyin.localeCompare(b.pinyin);
            }
        });
    }

    // --- 筛选系统逻辑 ---

    function renderFilterSystem() {
        filterTagsArea.innerHTML = '';
        
        // 第一层：主标签
        const mainLevelContainer = document.createElement('div');
        mainLevelContainer.className = 'filter-section';
        const mainTitle = document.createElement('div');
        mainTitle.className = 'filter-section-title';
        mainTitle.textContent = '主要业务';
        mainLevelContainer.appendChild(mainTitle);

        Object.keys(tagSystem).forEach(mainTag => {
            const btn = createTagButton(mainTag, 'main');
            btn.addEventListener('click', () => toggleMainTag(mainTag, btn));
            mainLevelContainer.appendChild(btn);
        });

        filterTagsArea.appendChild(mainLevelContainer);

        // 第二层：子标签容器 (动态生成)
        const subLevelContainer = document.createElement('div');
        subLevelContainer.id = 'subLevelContainer';
        subLevelContainer.className = 'filter-section';
        filterTagsArea.appendChild(subLevelContainer);
    }

    function createTagButton(text, type) {
        const btn = document.createElement('span');
        btn.className = 'tag-btn';
        btn.textContent = text;
        if (selectedTags.has(text)) {
            btn.classList.add('active');
        }
        return btn;
    }

    function toggleMainTag(clickedTag, clickedBtnElement) {
        const allMainBtns = clickedBtnElement.parentElement.querySelectorAll('.tag-btn');
        
        // 如果点击的标签已经是当前激活的主标签，则取消选择
        if (activeMainTag === clickedTag) {
            removeTag(clickedTag); // 同时移除主标签及其所有子标签
            clickedBtnElement.classList.remove('active');
            activeMainTag = null;
            renderSubTags(null); // 清空子标签显示区
        } else {
            // 选择了新的主标签
            //取消之前激活的主标签（如果存在）
            if (activeMainTag) {
                const prevActiveBtn = Array.from(allMainBtns).find(btn => btn.textContent === activeMainTag);
                if (prevActiveBtn) {
                    prevActiveBtn.classList.remove('active');
                }
                removeTag(activeMainTag); // 这会同时移除之前的主标签及其所有子标签
            }

            // 激活新的主标签
            addTag(clickedTag); // 这会将新的主标签添加到 selectedTags
            clickedBtnElement.classList.add('active');
            activeMainTag = clickedTag;
            renderSubTags(clickedTag); // 渲染新主标签的子标签
        }
        // addTag 和 removeTag 内部已经调用了 updateSelectedTagsDisplay() 和 applyFilters()
    }

    function renderSubTags(mainTag) {
        const container = document.getElementById('subLevelContainer');
        container.innerHTML = '';

        if (!mainTag || !tagSystem[mainTag]) return;

        // 遍历该主标签下的所有子类别 (风格, 类型, 业务等)
        const subCategories = tagSystem[mainTag];
        
        Object.keys(subCategories).forEach(catName => {
            const wrapper = document.createElement('div');
            wrapper.style.marginBottom = '10px';
            
            const title = document.createElement('span');
            title.className = 'filter-section-title';
            title.textContent = `${mainTag} - ${catName}: `;
            title.style.marginRight = '10px';
            wrapper.appendChild(title);

            subCategories[catName].forEach(subTag => {
                const btn = createTagButton(subTag, 'sub');
                btn.addEventListener('click', () => toggleSubTag(subTag, btn));
                wrapper.appendChild(btn);
            });

            container.appendChild(wrapper);
        });
    }

    function toggleSubTag(tag, btnElement) {
        if (selectedTags.has(tag)) {
            removeTag(tag);
            btnElement.classList.remove('active');
        } else {
            addTag(tag);
            btnElement.classList.add('active');
        }
    }

    function addTag(tag) {
        selectedTags.add(tag);
        updateSelectedTagsDisplay();
        applyFilters();
    }

    function removeTag(tag) {
        selectedTags.delete(tag);
        
        // 如果移除的是主标签，也要移除它属下的所有子标签选中状态吗？
        // 需求说："取消主标签则自动隐藏并清除已选子标签"
        if (tagSystem[tag]) {
            // 主标签
            const subCats = tagSystem[tag];
            Object.values(subCats).flat().forEach(subTag => {
                selectedTags.delete(subTag);
            });
            
            // 如果当前展示的是这个主标签的子项，清空子项显示区
            if (activeMainTag === tag) {
                activeMainTag = null;
                renderSubTags(null);
            }
        }

        updateSelectedTagsDisplay();
        
        // 同步更新按钮状态 (因为可能从上方小条删除)
        const allBtns = document.querySelectorAll('.tag-btn');
        allBtns.forEach(btn => {
            if (btn.textContent === tag) {
                btn.classList.remove('active');
            }
            // 如果是主标签被删除了，它的子标签按钮也要取消高亮（虽然可能已经不可见了）
             if (tagSystem[tag]) {
                 const subCats = tagSystem[tag];
                 const allSubTags = Object.values(subCats).flat();
                 if (allSubTags.includes(btn.textContent)) {
                     btn.classList.remove('active');
                 }
             }
        });

        applyFilters();
    }

    function updateSelectedTagsDisplay() {
        selectedTagsDisplay.innerHTML = '';
        selectedTags.forEach(tag => {
            const el = document.createElement('span');
            el.className = 'selected-tag';
            el.innerHTML = `${tag} <span class="remove">×</span>`;
            el.querySelector('.remove').addEventListener('click', () => removeTag(tag));
            selectedTagsDisplay.appendChild(el);
        });
    }

    function applyFilters() {
        const keyword = searchInput.value.toLowerCase();
        filterMembers(keyword);
    }

    function filterMembers(keyword) {
        console.log('filterMembers called with keyword:', keyword, 'and selectedTags:', Array.from(selectedTags));
        currentMembers = membersData.filter(member => {
            // 1. 标签筛选 (AND 逻辑)
            const allTagsMatch = Array.from(selectedTags).every(tag => {
                // Check if the tag is a main tag (e.g., "绘画", "写文")
                if (tagSystem[tag]) { // This means 'tag' is a main tag
                    return member.mainTags && member.mainTags.includes(tag); // Filter by member's mainTags
                } else { // This means 'tag' is a sub tag
                    // Check if any of the member's businesses have this sub tag
                    return member.businesses.some(business => business.tags && business.tags.includes(tag));
                }
            });
            
            // 2. 关键词筛选
            const matchesKeyword = member.name.toLowerCase().includes(keyword) || 
                                   member.role.toLowerCase().includes(keyword) ||
                           (member.mainTags && member.mainTags.some(t => t.toLowerCase().includes(keyword))) ||
                           member.businesses.some(business => business.tags && business.tags.some(t => t.toLowerCase().includes(keyword)));

            return allTagsMatch && matchesKeyword;
        });
        console.log('After filtering, currentMembers length:', currentMembers.length);

        // 重置到第一页
        currentPage = 1;
        renderMembers();
    }

    // --- 列表渲染与分页 ---

    function renderMembers() {
        console.log('renderMembers called. currentMembers length:', currentMembers.length, 'currentPage:', currentPage);
        membersGrid.innerHTML = '';
        
        if (currentMembers.length === 0) {
            console.log('currentMembers is empty, displaying no results message.');
            membersGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #999;">目前没有符合条件的社员哦~</div>';
            renderPagination(0);
            return;
        }

        const totalPages = Math.ceil(currentMembers.length / itemsPerPage);
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageMembers = currentMembers.slice(start, end);

        pageMembers.forEach(member => {
            const card = document.createElement('div');
            card.className = 'member-card';

            let memberPreviewCarouselHtml = '';
            const previewImages = [];

            if (member.businesses && member.businesses.length > 0) {
                member.businesses.forEach(business => {
                    if (business.gallery && business.gallery.length > 0) {
                        const firstImage = business.gallery[0];
                        const imageUrl = firstImage.thumb || firstImage.url;
                        if (imageUrl) {
                            previewImages.push(imageUrl);
                        }
                    }
                });
            }

            if (previewImages.length > 0) {
                // 为每个社员卡片的回廊生成一个唯一ID
                const carouselId = `member-carousel-${member.pinyin}`; 
                memberPreviewCarouselHtml = `
                    <div class="member-preview-carousel" id="${carouselId}">
                        <div class="carousel-images-container">
                            ${previewImages.map((imgUrl, index) => `
                                <img src="${imgUrl}" alt="${member.name} preview ${index + 1}" class="member-preview-image ${index === 0 ? 'active' : ''}">
                            `).join('')}
                        </div>
                    </div>
                `;
            } else {
                // 如果没有预览图，可以显示一个占位符或者不显示
                memberPreviewCarouselHtml = `<div class="no-preview-image">暂无预览图</div>`;
            }

            card.innerHTML = `
                <div class="member-name">${member.name}</div>
                ${memberPreviewCarouselHtml}
                <div class="member-role">${member.role}</div>
            `;
            card.addEventListener('click', () => openMemberDetail(member));
            membersGrid.appendChild(card);
        });

        renderPagination(totalPages);
        // 在渲染所有社员卡片后，初始化回廊
        initMemberCarousels(); 
    }

    // 初始化社员预览卡片的回廊
    function initMemberCarousels() {
        document.querySelectorAll('.member-preview-carousel').forEach(carousel => {
            const container = carousel.querySelector('.carousel-images-container');
            const images = Array.from(container.querySelectorAll('.member-preview-image'));
            if (images.length <= 1) return; // 如果只有一张图或没有图，则不需要回廊效果

            let currentIndex = 0;
            const intervalTime = 2000; // 2秒切换一次

            function showImage(index) {
                images.forEach((img, i) => {
                    img.classList.remove('active');
                    img.style.transform = `translateX(-${index * 100}%)`; // 滑动动画
                });
                images[index].classList.add('active');
            }

            setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            }, intervalTime);

            // 初始显示第一张
            showImage(currentIndex);
        });
    }

    function renderPagination(totalPages) {
        paginationContainer.innerHTML = '';
        if (totalPages <= 1) return;

        // 构造分页控件
        const controls = document.createElement('div');
        controls.className = 'pagination-controls';

        // 下拉选单
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
            renderMembers();
        });

        // 左右箭头
        const prevBtn = document.createElement('button');
        prevBtn.className = 'btn';
        prevBtn.textContent = '←';
        prevBtn.disabled = currentPage === 1;
        prevBtn.onclick = () => {
            if(currentPage > 1) {
                currentPage--;
                renderMembers();
            }
        };

        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn';
        nextBtn.textContent = '→';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.onclick = () => {
            if(currentPage < totalPages) {
                currentPage++;
                renderMembers();
            }
        };

        const pageInfo = document.createElement('span');
        pageInfo.textContent = `${currentPage} / ${totalPages}`;

        controls.appendChild(select); // 左侧下拉
        // 中间部分
        const centerNav = document.createElement('div');
        centerNav.style.display = 'flex';
        centerNav.style.alignItems = 'center';
        centerNav.style.gap = '10px';
        centerNav.style.marginLeft = '20px';
        
        centerNav.appendChild(prevBtn);
        centerNav.appendChild(pageInfo);
        centerNav.appendChild(nextBtn);
        
        controls.appendChild(centerNav);

        paginationContainer.appendChild(controls);
    }

    // --- 详情页渲染 ---

    function openMemberDetail(member) {
        const content = modal.querySelector('.modal-body');
        
        // 构建业务回廊 HTML
        const businessHtml = member.businesses.map((b, businessIndex) => {
            let businessGalleryHtml = '';
            // 使用 member.name 和 businessIndex 创建每个业务回廊的唯一 ID
            const uniqueBusinessId = `${member.name.replace(/\s+/g, '')}-${businessIndex}`; 

            if (b.gallery && b.gallery.length > 0) {
                businessGalleryHtml = `
                    <div class="business-works-carousel">
                        <button class="carousel-btn prev-btn" data-business-id="${uniqueBusinessId}">&#9664;</button>
                        <div class="business-works-container" id="business-works-container-${uniqueBusinessId}">
                            ${b.gallery.map((work, workIndex) => {
                                let mediaElement = '';
                                if (work.type === 'video') {
                                    mediaElement = `<video src="${work.url}" controls preload="metadata"></video>`;
                                } else if (work.type === 'audio') {
                                    mediaElement = `<audio src="${work.url}" controls preload="metadata"></audio>`;
                                } else { // 默认为图片
                                    mediaElement = `<img src="${work.thumb || work.url}" alt="work">`;
                                }
                                return `
                                    <div class="business-work-item" data-index="${workIndex}" data-type="${work.type || 'image'}" onclick="viewOriginal('${work.url}', '${work.type || 'image'}', ${workIndex}, '${encodeURIComponent(JSON.stringify(b.gallery))}')">
                                        ${mediaElement}
                                    </div>
                                `;
                            }).join('')}
                        </div>
                        <button class="carousel-btn next-btn" data-business-id="${uniqueBusinessId}">&#9654;</button>
                    </div>
                `;
            } else {
                businessGalleryHtml = `<div class="no-gallery-items">暂无例图</div>`;
            }

            const businessTagsHtml = b.tags && b.tags.length > 0 ? `
                <div class="business-tags">
                    ${b.tags.map(t => `<span class="member-role">${t}</span>`).join('')}
                </div>
            ` : '';

            return `
                <div class="business-card">
                    <div class="business-card-header">
                        <div class="business-name">${b.name}</div>
                        <div class="business-price">${b.price}</div>
                    </div>
                    <div class="business-desc">${b.desc}</div>
                    ${businessGalleryHtml}
                    ${businessTagsHtml}
                </div>
            `;
        }).join('');

        content.innerHTML = `
            <div class="detail-header">
                <div style="text-align:left; flex:1;">
                    <h2 style="margin-bottom:0.5rem; text-align:left;">${member.name} <span style="font-size:1rem; color:#888; font-weight:normal;">${member.role}</span></h2>
                    ${member.bio ? `<p style="color:#666;">${member.bio}</p>` : ''}
                </div>
            </div>

            <div class="business-gallery">
                <div class="section-title">业务范畴</div>
                <div class="business-cards">
                    ${businessHtml}
                </div>
            </div>
        `;

        modal.style.display = 'flex';
        initBusinessCarousels(member); // 初始化业务作品回廊

        // 确保模态框打开时，滚动条在顶部
        modal.querySelector('.modal-content').scrollTop = 0;
    }

    // 初始化业务回廊的函数
    function setupBusinessCarousels() {
        document.querySelectorAll('.business-works-carousel').forEach(carousel => {
            const businessId = carousel.querySelector('.prev-btn').dataset.businessId;
            const container = document.getElementById(`business-works-container-${businessId}`);
            const items = Array.from(container.children);
            const prevBtn = carousel.querySelector('.prev-btn');
            const nextBtn = carousel.querySelector('.next-btn');

            let currentIndex = 0;
            const itemsPerPage = 2; // 每行显示2个项目

            function updateCarousel() {
                // 设置每个项目的宽度，使其在容器中占据 100% / itemsPerPage 的空间
                items.forEach(item => {
                    item.style.flex = `0 0 ${100 / itemsPerPage}%`;
                });
                // 通过 translateX 移动容器来显示当前的项目
                container.style.transform = `translateX(-${currentIndex * (100 / itemsPerPage)}%)`;
                // 更新按钮的禁用状态
                prevBtn.disabled = currentIndex === 0;
                nextBtn.disabled = currentIndex >= items.length - itemsPerPage;
            }

            prevBtn.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCarousel();
                }
            });

            nextBtn.addEventListener('click', () => {
                if (currentIndex < items.length - itemsPerPage) {
                    currentIndex++;
                    updateCarousel();
                }
            });

            updateCarousel(); // 初始更新，确保显示正确
        });
    }

    // 全局函数，用于模态框内点击查看原图
    window.viewOriginal = function(url, type, initialIndex, galleryJson) {
        console.log('viewOriginal called:', { url, type, initialIndex, galleryJson });

        // 清除旧的导航按钮，避免重复添加
        const existingPrevBtn = mediaPreviewModal.querySelector('.prev-media-btn');
        const existingNextBtn = mediaPreviewModal.querySelector('.next-media-btn');
        if (existingPrevBtn) {
            existingPrevBtn.remove();
            console.log('Removed existing prev button.');
        }
        if (existingNextBtn) {
            existingNextBtn.remove();
            console.log('Removed existing next button.');
        }

        mediaContainer.innerHTML = ''; // 清空之前的内容
        let gallery;
        try {
            gallery = JSON.parse(decodeURIComponent(galleryJson));
            console.log('Parsed gallery:', gallery);
        } catch (e) {
            console.error('Failed to parse galleryJson:', e);
            console.error('galleryJson was:', galleryJson);
            return; // 如果解析失败，则停止执行
        }
        
        let currentIndex = initialIndex;

        function showMedia(index) {
            console.log('showMedia called with index:', index);
            mediaContainer.innerHTML = ''; // 清空之前的内容
            const work = gallery[index];
            let mediaElementHtml;
            if (work.type === 'video') {
                mediaElementHtml = `<video src="${work.url}" controls autoplay loop class="zoomable-media"></video>`;
            } else if (work.type === 'audio') {
                mediaElementHtml = `<audio src="${work.url}" controls autoplay loop class="zoomable-media"></audio>`;
            } else { // 默认为图片
                mediaElementHtml = `<img src="${work.url}" alt="preview" class="zoomable-media">`;
            }
            mediaContainer.innerHTML = `<div class="zoomable-media-container">${mediaElementHtml}</div>`;
            console.log('Media element added:', mediaElementHtml);

            // 初始化缩放功能
            initZoom(mediaContainer.querySelector('.zoomable-media-container'));

            // 更新按钮状态
            prevMediaBtn.style.display = gallery.length > 1 ? 'block' : 'none';
            nextMediaBtn.style.display = gallery.length > 1 ? 'block' : 'none';
            prevMediaBtn.disabled = index === 0;
            nextMediaBtn.disabled = index === gallery.length - 1;
            console.log('Navigation buttons updated. Prev disabled:', prevMediaBtn.disabled, 'Next disabled:', nextMediaBtn.disabled);
        }

        // 添加导航按钮
        const prevMediaBtn = document.createElement('button');
        prevMediaBtn.className = 'media-nav-btn prev-media-btn';
        prevMediaBtn.innerHTML = '&#9664;';
        prevMediaBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // 阻止事件冒泡到模态框背景
            if (currentIndex > 0) {
                currentIndex--;
                showMedia(currentIndex);
            }
        });

        const nextMediaBtn = document.createElement('button');
        nextMediaBtn.className = 'media-nav-btn next-media-btn';
        nextMediaBtn.innerHTML = '&#9654;';
        nextMediaBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // 阻止事件冒泡到模态框背景
            if (currentIndex < gallery.length - 1) {
                currentIndex++;
                showMedia(currentIndex);
            }
        });

        mediaPreviewModal.appendChild(prevMediaBtn);
        mediaPreviewModal.appendChild(nextMediaBtn);
        console.log('Navigation buttons appended to mediaPreviewModal.');

        showMedia(currentIndex); // 初始显示
        mediaPreviewModal.style.display = 'flex';
        console.log('mediaPreviewModal display set to flex.');
    };

    // 初始化缩放功能
    function initZoom(container) {
        const media = container.querySelector('.zoomable-media');
        if (!media) return;

        let scale = 1;
        let translateX = 0;
        let translateY = 0;
        let startPointers = []; // 用于存储触摸点
        let isDragging = false; // 用于鼠标拖动
        let lastMouseX = 0;
        let lastMouseY = 0;

        function applyTransform() {
            media.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
        }

        function limitTranslation() {
            if (scale <= 1) {
                translateX = 0;
                translateY = 0;
                return;
            }

            const mediaWidth = media.offsetWidth * scale;
            const mediaHeight = media.offsetHeight * scale;
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;

            const maxTranslateX = Math.max(0, (mediaWidth - containerWidth) / 2);
            const maxTranslateY = Math.max(0, (mediaHeight - containerHeight) / 2);

            translateX = Math.max(-maxTranslateX, Math.min(translateX, maxTranslateX));
            translateY = Math.max(-maxTranslateY, Math.min(translateY, maxTranslateY));
        }

        // 鼠标滚轮缩放 (桌面端)
        container.addEventListener('wheel', (e) => {
            e.preventDefault(); // 阻止页面滚动
            const scaleAmount = 0.1;
            const oldScale = scale;

            if (e.deltaY < 0) { // 向上滚动，放大
                scale += scaleAmount;
            } else { // 向下滚动，缩小
                scale -= scaleAmount;
            }
            scale = Math.max(1, Math.min(scale, 5)); // 限制缩放范围

            // 调整平移，使缩放中心在鼠标位置
            const rect = container.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            translateX -= (mouseX / oldScale - mouseX / scale) * scale;
            translateY -= (mouseY / oldScale - mouseY / scale) * scale;

            limitTranslation();
            applyTransform();
        });

        // 鼠标拖动 (桌面端)
        container.addEventListener('mousedown', (e) => {
            if (scale > 1 && e.button === 0) { // 只有在放大且左键点击时才拖动
                isDragging = true;
                lastMouseX = e.clientX;
                lastMouseY = e.clientY;
                container.style.cursor = 'grabbing';
            }
        });

        container.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const dx = e.clientX - lastMouseX;
                const dy = e.clientY - lastMouseY;

                translateX += dx;
                translateY += dy;

                limitTranslation();
                applyTransform();

                lastMouseX = e.clientX;
                lastMouseY = e.clientY;
            }
        });

        container.addEventListener('mouseup', () => {
            isDragging = false;
            container.style.cursor = 'grab';
        });

        container.addEventListener('mouseleave', () => {
            isDragging = false;
            container.style.cursor = 'grab';
        });

        // 触摸事件缩放 (移动端)
        container.addEventListener('touchstart', (e) => {
            if (e.touches.length === 2) { // 双指缩放
                startPointers = [{ x: e.touches[0].clientX, y: e.touches[0].clientY }, { x: e.touches[1].clientX, y: e.touches[1].clientY }];
                e.preventDefault(); // 阻止默认的滚动和缩放行为
            } else if (e.touches.length === 1 && scale > 1) { // 单指拖动
                isDragging = true;
                lastMouseX = e.touches[0].clientX;
                lastMouseY = e.touches[0].clientY;
            }
        });

        container.addEventListener('touchmove', (e) => {
            if (e.touches.length === 2 && startPointers.length === 2) { // 双指缩放
                const currentPointers = [{ x: e.touches[0].clientX, y: e.touches[0].clientY }, { x: e.touches[1].clientX, y: e.touches[1].clientY }];

                // 计算初始距离和当前距离
                const initialDistance = Math.sqrt(
                    Math.pow(startPointers[0].x - startPointers[1].x, 2) +
                    Math.pow(startPointers[0].y - startPointers[1].y, 2)
                );
                const currentDistance = Math.sqrt(
                    Math.pow(currentPointers[0].x - currentPointers[1].x, 2) +
                    Math.pow(currentPointers[0].y - currentPointers[1].y, 2)
                );

                const oldScale = scale;
                scale = Math.max(1, Math.min(oldScale * (currentDistance / initialDistance), 5)); // 限制缩放范围

                // 计算中心点
                const initialMidX = (startPointers[0].x + startPointers[1].x) / 2;
                const initialMidY = (startPointers[0].y + startPointers[1].y) / 2;
                const currentMidX = (currentPointers[0].x + currentPointers[1].x) / 2;
                const currentMidY = (currentPointers[0].y + currentPointers[1].y) / 2;

                // 调整平移，使缩放中心在双指中心
                translateX += currentMidX - initialMidX;
                translateY += currentMidY - initialMidY;

                limitTranslation();
                applyTransform();
                startPointers = currentPointers; // 更新起始点
            } else if (e.touches.length === 1 && isDragging) { // 单指拖动
                const dx = e.touches[0].clientX - lastMouseX;
                const dy = e.touches[0].clientY - lastMouseY;

                translateX += dx;
                translateY += dy;

                limitTranslation();
                applyTransform();

                lastMouseX = e.touches[0].clientX;
                lastMouseY = e.touches[0].clientY;
            }
        });

        container.addEventListener('touchend', () => {
            isDragging = false;
            startPointers = []; // 清空触摸点
            if (scale <= 1) { // 如果缩放回1，重置平移
                translateX = 0;
                translateY = 0;
                applyTransform();
            }
        });

        // 重置缩放和平移
        function resetZoom() {
            scale = 1;
            translateX = 0;
            translateY = 0;
            applyTransform();
        }

        // 在媒体切换时重置缩放
        media.addEventListener('load', resetZoom); // 图片加载完成时重置
        media.addEventListener('loadeddata', resetZoom); // 视频加载完成时重置
    }

    // 初始化业务作品回廊
    function initBusinessCarousels(member) {
        member.businesses.forEach((b, businessIndex) => {
            const uniqueBusinessId = `${member.name.replace(/\s+/g, '')}-${businessIndex}`;
            const container = document.getElementById(`business-works-container-${uniqueBusinessId}`);
            if (!container) return;

            const items = Array.from(container.querySelectorAll('.business-work-item'));
            if (items.length === 0) return;

            const prevBtn = container.closest('.business-works-carousel').querySelector('.prev-btn');
            const nextBtn = container.closest('.business-works-carousel').querySelector('.next-btn');

            let currentIndex = 0;
            const itemsPerView = 2; // 每页显示2个作品

            function updateCarousel() {
                // 获取单个作品项的宽度，包括其右侧的间距
                // 注意：这里假设所有 business-work-item 的宽度和间距都相同
                const itemWidth = items[0].offsetWidth + parseFloat(getComputedStyle(container).gap);
                container.scrollLeft = currentIndex * itemWidth;

                prevBtn.disabled = currentIndex === 0;
                nextBtn.disabled = currentIndex >= items.length - itemsPerView;
            }

            prevBtn.addEventListener('click', () => {
                currentIndex = Math.max(0, currentIndex - itemsPerView);
                updateCarousel();
            });

            nextBtn.addEventListener('click', () => {
                currentIndex = Math.min(items.length - itemsPerView, currentIndex + itemsPerView);
                updateCarousel();
            });

            // 初始更新
            updateCarousel();
        });
    }
});
