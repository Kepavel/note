#include<bits/stdc++.h>
ListNode* FindthToTail(ListNode* pListHead, unsigned int k)
{
	if (pListHead == nullptr||k==0)
		return nullptr;
	ListNode* pAhead = pListHead;
	ListNode* pBehind = nullptr;
	unsigned int i = 0;
	while (i <= k - 1 && pAhead != null)
	{
		
		pAhead = pAhead->m_pNext;
		i++;
	}
	if (pAhead == null && i < k - 1)
		return nullptr;
	pBehind = pListHead;
	while (pAhead->m_pNext != nullptr)
	{
		pAhead = pAhead->m_pNext;
		pBehind = pBehind->m_pNext;
	}
	return pBehind;
}